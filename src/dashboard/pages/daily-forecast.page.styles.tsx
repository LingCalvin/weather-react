import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  forecastTile: {
    display: "grid",
    gridTemplateAreas: `
    "forecastTileTitle forecastTileTitle forecastTileTitle"
    "forecastTileIcon forecastTileDescription forecastTileTemperature"
    `,
    alignItems: "center",
    columnGap: theme.spacing(1),
  },
  forecastTileTitle: {
    gridArea: "forecastTileTitle",
    justifySelf: "start",
  },
  forecastTileIcon: {
    gridArea: "forecastTileIcon",
  },
  forecastTileDescription: {
    gridArea: "forecastTileDescription",
  },
  forecastTileTemperature: {
    gridArea: "forecastTileTemperature",
    justifySelf: "end",
  },
}));

export default useStyles;
