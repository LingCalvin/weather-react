import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridList: {
    display: "grid",
    gridAutoFlow: "column",
    justifyItems: "center",
    gap: theme.spacing(4),
  },
  gridListContainer: {
    display: "flex",
    overflowX: "auto",
    paddingLeft: 0,
    paddingRight: 0,
  },
  spacer: {
    display: "inline-block",
    minWidth: theme.spacing(4),
  },
}));

export default useStyles;
