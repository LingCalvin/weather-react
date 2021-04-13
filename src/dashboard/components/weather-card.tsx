import { Box, Card, CardContent, Typography } from "@material-ui/core";
import Speed from "../interfaces/speed";
import * as speedUtils from "../utils/speed.utils";
import * as temperatureUtils from "../utils/temperature.utils";

export interface WeatherCardProps {
  icon: string;
  shortForecast: string;
  temperature: number;
  temperatureUnit: string;
  windSpeed?: Speed;
  relativeHumidity?: number;
  updateTime?: Date;
  station?: string;
}

export default function WeatherCard({
  icon,
  shortForecast,
  temperature,
  temperatureUnit,
  windSpeed,
  relativeHumidity,
  updateTime,
  station,
}: WeatherCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{shortForecast}</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <img alt="" src={icon} />
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Typography variant="h3">
              {temperatureUtils.format(
                Math.round(temperature),
                temperatureUnit
              )}
            </Typography>
            {relativeHumidity !== undefined && (
              <Typography>{`Humidity: ${Math.round(
                relativeHumidity
              )}%`}</Typography>
            )}
            {windSpeed !== undefined && (
              <Typography>{`Wind: ${speedUtils.format({
                value: Math.round(windSpeed.value),
                unit: windSpeed.unit,
              })}`}</Typography>
            )}
          </Box>
        </Box>
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
      </CardContent>
    </Card>
  );
}
