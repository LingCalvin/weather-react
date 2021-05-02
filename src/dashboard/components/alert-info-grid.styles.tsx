import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  alertInfoGrid: {
    display: "grid",
    columnGap: theme.spacing(1),
    gridTemplateColumns: "auto 1fr",
  },
}));

export default useStyles;
