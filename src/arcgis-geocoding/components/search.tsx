import { InputAdornment, InputProps, TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteProps } from "@material-ui/lab";
import { useEffect, useRef, useState } from "react";
import useDebouncedValue from "../../common/hooks/use-debounced-value";
import Candidate from "../interfaces/candidate";
import SuggestParams from "../interfaces/suggest-params";
import Suggestion from "../interfaces/suggestion";
import arcGISGeocodingService from "../services/arcgis-geocoding.service";

interface SearchProps {
  suggestParams?: Omit<SuggestParams, "text" | "f">;
  startAdornment?: InputProps["startAdornment"];
  autocompleteProps?: Omit<
    AutocompleteProps<Suggestion, undefined, undefined, undefined>,
    | "options"
    | "getOptionLabel"
    | "getOptionSelected"
    | "inputValue"
    | "onInputChange"
    | "value"
    | "onChange"
    | "renderInput"
  >;
  autoFocus?: boolean;
  placeholder?: string;
  onSelectionChange?: (value: Candidate) => void;
}

export default function Search({
  suggestParams,
  startAdornment,
  autocompleteProps,
  autoFocus,
  placeholder,
  onSelectionChange,
}: SearchProps) {
  const [value, setValue] = useState<Suggestion | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const debouncedInputValue = useDebouncedValue(inputValue, 100);
  const inputChangeReason = useRef("");

  useEffect(() => {
    if (
      debouncedInputValue.length > 0 &&
      // Do not send a request if the reason inputValue changed was because a
      // value was selected or the value was cleared
      inputChangeReason.current === "input"
    ) {
      arcGISGeocodingService
        .suggest({
          text: debouncedInputValue,
          f: "json",
          ...suggestParams,
        })
        .then((suggestions) => setSuggestions(suggestions));
    } else {
      setSuggestions([]);
    }
  }, [debouncedInputValue, suggestParams]);

  return (
    <Autocomplete
      options={suggestions}
      getOptionLabel={(option) => option.text}
      getOptionSelected={(option, value) => {
        return (
          option.isCollection === value.isCollection &&
          option.magicKey === value.magicKey &&
          option.text === value.text
        );
      }}
      inputValue={inputValue}
      onInputChange={(_e, value, reason) => {
        inputChangeReason.current = reason;
        setInputValue(value);
      }}
      value={value}
      onChange={(_e, value) => {
        setValue(value);
        arcGISGeocodingService
          .findAddressCandidates({
            f: "json",
            SingeLine: value?.text,
            magicKey: value?.magicKey,
            maxLocations: 1,
            outFields: ["City", "RegionAbbr"],
          })
          .then((candidates) => onSelectionChange?.(candidates[0]));
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            startAdornment: startAdornment ? (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ) : undefined,
          }}
          autoFocus={autoFocus}
          placeholder={placeholder}
        />
      )}
      {...autocompleteProps}
    />
  );
}
