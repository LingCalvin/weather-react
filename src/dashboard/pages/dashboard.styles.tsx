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
  hourlyForecastTab: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
  bottomNavigation: {
    borderTop: "1px solid",
    borderColor: theme.palette.divider,
  },
  tabPanel: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default useStyles;
