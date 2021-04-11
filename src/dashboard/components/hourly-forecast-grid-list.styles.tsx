import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridList: {
    display: "grid",
    gridAutoFlow: "column",
    gap: theme.spacing(4),
    overflowX: "auto",
  },
}));

export default useStyles;
