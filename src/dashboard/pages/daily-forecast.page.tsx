import { Card, CardContent, Typography } from "@material-ui/core";
import { Period } from "../../nws/interfaces/forecast-response";
import useStyles from "./daily-forecast.page.styles";

interface DailyForecastPageProps {
  forecast: Period[];
}

export default function DailyForecastPage({
  forecast,
}: DailyForecastPageProps) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.cardContent}>
        {forecast.map((period) => (
          <div className={classes.forecastTile}>
            <Typography className={classes.forecastTileTitle} variant="h6">
              {period.name}
            </Typography>
            <img
              className={classes.forecastTileIcon}
              src={period.icon}
              alt=""
            />
            <Typography className={classes.forecastTileDescription}>
              {period.shortForecast}
            </Typography>
            <Typography
              variant="h6"
              className={classes.forecastTileTemperature}
            >
              {period.temperature}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
