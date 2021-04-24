import { Typography } from "@material-ui/core";
import { Period } from "../../nws/interfaces/forecast";
import useStyles from "./daily-forecast.page.styles";
import * as TemperatureUtils from "../utils/temperature.utils";
import Image from "../../common/components/image";

interface DailyForecastPageProps {
  forecast: Period[];
}

export default function DailyForecastPage({
  forecast,
}: DailyForecastPageProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {forecast.map((period) => (
        <div
          className={classes.forecastTile}
          key={period.startTime.toISOString()}
        >
          <Typography className={classes.forecastTileTitle} variant="h6">
            {period.name}
          </Typography>
          <Image
            className={classes.forecastTileIcon}
            src={period.icon}
            alt=""
            skeletonProps={{ height: 86, width: 86 }}
          />
          <Typography className={classes.forecastTileDescription}>
            {period.shortForecast}
          </Typography>
          <Typography variant="h6" className={classes.forecastTileTemperature}>
            {TemperatureUtils.format(period.temperature)}
          </Typography>
        </div>
      ))}
    </div>
  );
}
