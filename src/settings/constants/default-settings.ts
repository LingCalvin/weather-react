import { SpeedUnit } from "../../nws/enums/speed-unit";
import { TemperatureUnit } from "../../nws/enums/temperature-unit";
import Settings from "../interfaces/settings";

/** The default settings to use when not set. */
export const defaultSettings: Settings = {
  speedUnit: SpeedUnit.MilesPerHour,
  temperatureUnit: TemperatureUnit.Fahrenheit,
};
