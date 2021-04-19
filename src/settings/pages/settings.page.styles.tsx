import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listSubHeader: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    textAlign: "start",
  },
}));

export default useStyles;
