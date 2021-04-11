import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spacer: {
    flexGrow: 1,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

export default useStyles;
