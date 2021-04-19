import { TemperatureUnit } from "../enums/temperature-unit";

export default interface Temperature {
  value: number;
  unit: TemperatureUnit;
}
