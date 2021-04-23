import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { SpeedUnit } from "../../nws/enums/speed-unit";
import { TemperatureUnit } from "../../nws/enums/temperature-unit";
import UnitMenu from "../components/unit-menu";
import { SettingsUpdateContext } from "../contexts/settings-update.context";
import { SettingsContext } from "../contexts/settings.context";
import * as SpeedUnitUtils from "../utils/speed-unit.utils";
import * as TemperatureUnitUtils from "../utils/temperature-unit.utils";
import useStyles from "./settings.page.styles";

const speedUnits = Object.keys(SpeedUnit).map(
  (key) => SpeedUnit[key as keyof typeof SpeedUnit]
);

const temperatureUnits = Object.keys(TemperatureUnit).map(
  (key) => TemperatureUnit[key as keyof typeof TemperatureUnit]
);

export default function SettingsPage() {
  const classes = useStyles();
  const history = useHistory();

  const updateSettings = useContext(SettingsUpdateContext);

  const [
    speedUnitMenuAnchor,
    setSpeedUnitMenuAnchor,
  ] = useState<null | Element>(null);
  const [
    temperatureUnitMenuAnchor,
    setTemperatureUnitMenuAnchor,
  ] = useState<null | Element>(null);

  const { speedUnit, temperatureUnit } = useContext(SettingsContext);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Settings</Typography>
        </Toolbar>
      </AppBar>
      <UnitMenu
        anchorEl={speedUnitMenuAnchor}
        open={Boolean(speedUnitMenuAnchor)}
        onClose={() => setSpeedUnitMenuAnchor(null)}
      >
        {speedUnits.map((unit) => (
          <MenuItem
            key={unit}
            onClick={() => {
              updateSettings({ speedUnit: unit });
              setSpeedUnitMenuAnchor(null);
            }}
          >
            {SpeedUnitUtils.toString(unit)}
          </MenuItem>
        ))}
      </UnitMenu>
      <UnitMenu
        anchorEl={temperatureUnitMenuAnchor}
        open={Boolean(temperatureUnitMenuAnchor)}
        onClose={() => setTemperatureUnitMenuAnchor(null)}
      >
        {temperatureUnits.map((unit) => (
          <MenuItem
            key={unit}
            onClick={() => {
              updateSettings({ temperatureUnit: unit });
              setTemperatureUnitMenuAnchor(null);
            }}
          >
            {TemperatureUnitUtils.toString(unit)}
          </MenuItem>
        ))}
      </UnitMenu>
      <List>
        <ListSubheader inset className={classes.listSubHeader}>
          Units
        </ListSubheader>
        <ListItem
          button
          onClick={(e) =>
            setSpeedUnitMenuAnchor(
              // Align the menu to the top of the list item's primary text
              e.currentTarget.firstElementChild?.firstElementChild ?? null
            )
          }
        >
          <ListItemText
            inset
            primary="Speed unit"
            secondary={SpeedUnitUtils.toString(speedUnit)}
          />
        </ListItem>
        <ListItem
          button
          onClick={(e) =>
            setTemperatureUnitMenuAnchor(
              e.currentTarget.firstElementChild?.firstElementChild ?? null
            )
          }
        >
          <ListItemText
            inset
            primary="Temperature unit"
            secondary={TemperatureUnitUtils.toString(temperatureUnit)}
          />
        </ListItem>
      </List>
    </>
  );
}
