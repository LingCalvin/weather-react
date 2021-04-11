import { Box, Card, CardContent, Typography } from "@material-ui/core";
import * as temperatureUtils from "../utils/temperature.utils";

interface WeatherCardProps {
  icon: string;
  shortForecast: string;
  temperature: number;
  temperatureUnit: string;
  updateTime?: Date;
}

export default function WeatherCard({
  icon,
  shortForecast,
  temperature,
  temperatureUnit,
  updateTime,
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
      </CardContent>
    </Card>
  );
}
