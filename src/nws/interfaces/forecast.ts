import { ForecastType } from "../enums/forecast-type";
import { Temperature } from "../types/temperature";

export interface Forecast {
  updatedTime: Date;
  type: ForecastType;
  periods: Period[];
}

export interface Period {
  name: string;
  startTime: Date;
  endTime: Date;
  isDayTime: Boolean;
  temperature: Temperature;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}
