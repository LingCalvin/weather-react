import { Card, CardContent, Divider } from "@material-ui/core";
import { Fragment } from "react";
import { Period } from "../../nws/interfaces/forecast";
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
      <CardContent className={classes.gridListContainer}>
        {/*
         * Maintain consistent spacing between tile and edge and tile and
         * divider.
         */}
        <div className={classes.spacer} />
        <div className={classes.gridList}>
          {periods.map(({ temperature, startTime: time, icon }, index) => (
            <Fragment key={time.toISOString()}>
              <HourlyForecastGridListTile
                temperature={temperature}
                time={time}
                icon={icon}
              />
              {index !== periods.length - 1 && (
                <Divider orientation="vertical" />
              )}
            </Fragment>
          ))}
        </div>
        <div className={classes.spacer} />
      </CardContent>
    </Card>
  );
}
