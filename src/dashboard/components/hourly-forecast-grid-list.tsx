import { Card, CardContent, Divider } from "@material-ui/core";
import React from "react";
import { Period } from "../../nws/interfaces/forecast-response";
import HourlyForecastGridListTile from "./hourly-forecast-grid-list-tile";
import useStyles from "./hourly-forecast-grid-list.styles";

interface HourlyForecastGridListProps {
  periods: Period[];
}

export default function HourlyForecastGridList({
  periods,
}: HourlyForecastGridListProps) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <div className={classes.gridList}>
          {periods.map(
            (
              { temperature, temperatureUnit, startTime: time, icon },
              index
            ) => (
              <React.Fragment key={time}>
                <HourlyForecastGridListTile
                  temperature={temperature}
                  temperatureUnit={temperatureUnit}
                  time={new Date(time)}
                  icon={icon}
                />
                {index !== periods.length - 1 && (
                  <Divider orientation="vertical" />
                )}
              </React.Fragment>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}
