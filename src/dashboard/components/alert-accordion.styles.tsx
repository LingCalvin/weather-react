import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  alertSummary: {
    display: "flex",
    alignItems: "center",
    columnGap: theme.spacing(1),
  },
  alertDetails: {
    display: "flex",
    flexDirection: "column",
    rowGap: theme.spacing(2),
    textAlign: "start",
  },
  preformattedElement: {
    whiteSpace: "pre-wrap",
  },
}));

export default useStyles;
