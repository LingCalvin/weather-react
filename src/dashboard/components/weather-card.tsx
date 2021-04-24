import { Box, Card, CardContent, Typography } from "@material-ui/core";
import Image from "../../common/components/image";
import { Speed } from "../../nws/types/speed";
import { Temperature } from "../../nws/types/temperature";
import * as SpeedUtils from "../utils/speed.utils";
import * as TemperatureUtils from "../utils/temperature.utils";

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
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{shortForecast}</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Image alt="" src={icon} skeletonProps={{ height: 86, width: 86 }} />
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
