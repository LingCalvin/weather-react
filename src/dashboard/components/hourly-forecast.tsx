import { Typography } from "@material-ui/core";
import Image from "../../common/components/image";
import { Period } from "../../nws/interfaces/forecast";
import useStyles from "./hourly-forecast.styles";
import * as TemperatureUtils from "../utils/temperature.utils";
import { NWSIconSize } from "../enums/nws-icon-size";
import { Fragment } from "react";

interface HourlyForecastProps {
  forecast: Period[];
}

export default function HourlyForecast({ forecast }: HourlyForecastProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {forecast.map(({ startTime, icon, shortForecast, temperature }) => (
        <Fragment key={startTime.toISOString()}>
          <Typography className={classes.temperature}>
            {startTime.toLocaleTimeString(undefined, { hour: "numeric" })}
          </Typography>
          <Image
            src={icon}
            alt=""
            height={NWSIconSize.Small}
            width={NWSIconSize.Small}
            skeletonProps={{
              height: NWSIconSize.Small,
              width: NWSIconSize.Small,
            }}
          />
          <Typography>{shortForecast}</Typography>
          <Typography>{TemperatureUtils.format(temperature)}</Typography>
        </Fragment>
      ))}
    </div>
  );
}
