import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    flexGrow: 1,
  },
  main: {
    flexGrow: 1,
  },
  hourlyForecastPage: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
  bottomNavigation: {
    borderTop: "1px solid",
    borderColor: theme.palette.divider,
    // Prevent the navigation bar from changing height when changing tabs
    minHeight: "56px",
  },
}));

export default useStyles;
