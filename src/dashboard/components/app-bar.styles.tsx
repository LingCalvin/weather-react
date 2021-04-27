import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
  spacer: {
    flexGrow: 1,
  },
}));

export default useStyles;
