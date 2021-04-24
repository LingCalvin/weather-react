import { Box, Card, CardContent, Typography } from "@material-ui/core";
import Image from "../../common/components/image";
import { Speed } from "../../nws/types/speed";
import { Temperature } from "../../nws/types/temperature";
import { NWSIconSize } from "../enums/nws-icon-size";
import * as SpeedUtils from "../utils/speed.utils";
import * as TemperatureUtils from "../utils/temperature.utils";
import useStyles from "./weather-card.styles";

export interface WeatherCardProps {
  icon: string;
  shortForecast: string;
  temperature: Temperature;
  windSpeed?: Speed;
  relativeHumidity?: number;
  updateTime?: Date;
  station?: string;
}

export default function WeatherCard({
  icon,
  shortForecast,
  temperature,
  windSpeed,
  relativeHumidity,
  updateTime,
  station,
}: WeatherCardProps) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{shortForecast}</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Image
            className={classes.icon}
            alt=""
            src={icon}
            skeletonProps={{
              height: NWSIconSize.Medium,
              width: NWSIconSize.Medium,
            }}
          />
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Typography variant="h3">
              {TemperatureUtils.format(temperature)}
            </Typography>
            {relativeHumidity !== undefined && (
              <Typography>{`Humidity: ${Math.round(
                relativeHumidity
              )}%`}</Typography>
            )}
            {windSpeed !== undefined && (
              <Typography>{`Wind: ${SpeedUtils.format(windSpeed)}`}</Typography>
            )}
            {updateTime && (
              <Box display="flex" justifyContent="flex-end">
                <Typography variant="caption">
                  {updateTime.toLocaleString()}
                </Typography>
              </Box>
            )}
            {updateTime && (
              <Box display="flex" justifyContent="flex-end">
                <Typography variant="caption">{station}</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
