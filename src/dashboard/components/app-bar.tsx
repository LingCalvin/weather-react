import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  IconButtonProps,
} from "@material-ui/core";
import {
  ArrowBack as ArrowBackIcon,
  MoreVert as MoreVertIcon,
  MyLocation as MyLocationIcon,
  Search as SearchIcon,
} from "@material-ui/icons";
import { useState } from "react";
import Search from "../../arcgis-geocoding/components/search";
import geolocationService from "../../common/services/geolocation.service";
import useStyles from "./app-bar.styles";

interface AppBarProps {
  location?: string;
  onShowMenu?: IconButtonProps["onClick"];
  onLocationChange?: (latitude: number, longitude: number) => void;
}

export default function AppBar({
  location,
  onShowMenu,
  onLocationChange,
}: AppBarProps) {
  const classes = useStyles();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        {!showSearch ? (
          <>
            <Typography variant="h6">{location ?? "Unknown"}</Typography>
            <IconButton color="inherit" onClick={() => setShowSearch(true)}>
              <SearchIcon />
            </IconButton>
            <Box className={classes.spacer} />
            <IconButton color="inherit" edge="end" onClick={onShowMenu}>
              <MoreVertIcon />
            </IconButton>
          </>
        ) : (
          <div className={classes.searchOrLocateContainer}>
            <div className={classes.searchContainer}>
              <Search
                autoFocus
                placeholder="Search location"
                autocompleteProps={{
                  autoHighlight: true,
                  fullWidth: true,
                }}
                startAdornment={
                  <IconButton
                    className={classes.searchExitButton}
                    onClick={() => setShowSearch(false)}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                }
                suggestParams={{
                  category: ["Postal", "Populated Place"],
                  countryCode: "USA",
                }}
                onSelectionChange={({ location: { x, y } }) => {
                  setShowSearch(false);
                  onLocationChange?.(y, x);
                }}
              />
            </div>
            <IconButton
              color="inherit"
              className={classes.searchExitButton}
              onClick={() => {
                setShowSearch(false);
                if (onLocationChange) {
                  geolocationService.getCurrentPosition().then(({ coords }) => {
                    onLocationChange(coords.latitude, coords.longitude);
                  });
                }
              }}
            >
              <MyLocationIcon />
            </IconButton>
          </div>
        )}
      </Toolbar>
    </MuiAppBar>
  );
}
