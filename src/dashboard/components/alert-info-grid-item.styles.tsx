import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  alertInfoGridHeadingCell: {
    justifySelf: "end",
    fontWeight: theme.typography.fontWeightBold,
  },
  alertInfoGridDataCell: {
    justifySelf: "start",
  },
}));

export default useStyles;
