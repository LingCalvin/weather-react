import { Temperature } from "../types/temperature";
import { Distance } from "../types/distance";
import { Pressure } from "../types/pressure";
import { Speed } from "../types/speed";

export interface Observation {
  station: string;
  timestamp: Date;
  description: string;
  icon: string;
  temperature?: Temperature;
  windDirection?: number;
  windSpeed?: Speed;
  windGust?: Speed;
  barometricPressure?: Pressure;
  seaLevelPressure?: Pressure;
  visibility?: Distance;
  maxTemperatureLast24Hours?: Temperature;
  minTemperatureLast24Hours?: Temperature;
  precipitationLastHour?: Distance;
  precipitationLast3Hours?: Distance;
  precipitationLast6Hours?: Distance;
  relativeHumidity?: number;
  windChill?: Temperature;
  heatIndex?: Temperature;
}
