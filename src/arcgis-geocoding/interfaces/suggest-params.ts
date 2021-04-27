import { ResponseFormat } from "../types/response-format";
import Extent from "./extent";

export default interface SuggestParams {
  text: string;
  f: ResponseFormat;
  location?:
    | [number, number]
    | { x: number; y: number; spatialReference: SpatialReference };
  category?: string | string[];
  searchExtend?:
    | [number, number, number, number]
    | (Extent & {
        spatialReference: SpatialReference;
      });
  maxSuggestions?: OneToFifteen;

  countryCode?: string;
}

interface SpatialReference {
  wkid: number;
}

type OneToFifteen =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;
