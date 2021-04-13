import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  const gridListItemSpacing = theme.spacing(2);
  return {
    gridList: {
      display: "grid",
      gridAutoFlow: "column",
      justifyItems: "center",
      gap: gridListItemSpacing,
    },
    gridListContainer: {
      display: "flex",
      overflowX: "auto",
      paddingLeft: 0,
      paddingRight: 0,
    },
    spacer: {
      display: "inline-block",
      minWidth: gridListItemSpacing,
    },
  };
});

export default useStyles;
