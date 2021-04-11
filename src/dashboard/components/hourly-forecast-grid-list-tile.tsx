import { Typography } from "@material-ui/core";
import * as temperatureUtils from "../utils/temperature.utils";
import useStyles from "./hourly-forecast-grid-list-item.styles";

interface HourlyForecastGridListTileProps {
  temperature: number;
  temperatureUnit: string;
  time: Date;
  icon: string;
}

export default function HourlyForecastGridListTile({
  temperature,
  temperatureUnit,
  time,
  icon,
}: HourlyForecastGridListTileProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>{time.toLocaleTimeString()}</Typography>
      <img src={icon} alt="" />
      <Typography variant="h6">
        {temperatureUtils.format(temperature, temperatureUnit)}
      </Typography>
    </div>
  );
}
