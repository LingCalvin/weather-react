import useStyles from "./alert-info-grid-item.styles";

export interface AlertInfoGridItemProps {
  heading: string;
  data: string;
}

export default function AlertInfoGridItem({
  heading,
  data,
}: AlertInfoGridItemProps) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.alertInfoGridHeadingCell}>{heading}</div>
      <div className={classes.alertInfoGridDataCell}>{data}</div>
    </>
  );
}
