import { Typography } from "@material-ui/core";
import { Temperature } from "../../nws/types/temperature";
import * as temperatureUtils from "../utils/temperature.utils";
import useStyles from "./hourly-forecast-grid-list-item.styles";

interface HourlyForecastGridListTileProps {
  temperature: Temperature;
  time: Date;
  icon: string;
}

export default function HourlyForecastGridListTile({
  temperature,
  time,
  icon,
}: HourlyForecastGridListTileProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>{time.toLocaleTimeString()}</Typography>
      <img src={icon} alt="" />
      <Typography variant="h6">
        {temperatureUtils.format(temperature)}
      </Typography>
    </div>
  );
}
