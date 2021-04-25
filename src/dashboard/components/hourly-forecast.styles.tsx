import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "repeat(4, auto)",
    gap: theme.spacing(1),
  },
  temperature: {
    fontWeight: "bold",
  },
}));

export default useStyles;
