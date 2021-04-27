import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  spacer: {
    flexGrow: 1,
  },
  main: {
    overflowY: "auto",
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
  searchContainer: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    flexGrow: 1,
  },
  searchOrLocateContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  searchExitButton: {
    padding: 0,
  },
}));

export default useStyles;
