import { TemperatureUnit } from "../enums/temperature-unit";
import { ValueWithUnit } from "../interfaces/value-with-unit";

export type Temperature = ValueWithUnit<number, TemperatureUnit>;
