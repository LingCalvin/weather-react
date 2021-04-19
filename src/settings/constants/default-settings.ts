import { SpeedUnit } from "../../dashboard/enums/speed-unit.enum";
import { TemperatureUnit } from "../../dashboard/enums/temperature-unit";
import Settings from "../interfaces/settings";

/** The default settings to use when not set. */
export const defaultSettings: Settings = {
  speedUnit: SpeedUnit.MilesPerHour,
  temperatureUnit: TemperatureUnit.Fahrenheit,
};
