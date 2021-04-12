import { Box, Card, CardContent, Typography } from "@material-ui/core";
import * as temperatureUtils from "../utils/temperature.utils";

export interface WeatherCardProps {
  icon: string;
  shortForecast: string;
  temperature: number;
  temperatureUnit: string;
  updateTime?: Date;
  station?: string;
}

export default function WeatherCard({
  icon,
  shortForecast,
  temperature,
  temperatureUnit,
  updateTime,
  station,
}: WeatherCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{shortForecast}</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <img alt="" src={icon} />
          <Typography variant="h3">
            {temperatureUtils.format(temperature, temperatureUnit)}
          </Typography>
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
