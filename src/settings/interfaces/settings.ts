import { SpeedUnit } from "../../nws/enums/speed-unit";
import { TemperatureUnit } from "../../nws/enums/temperature-unit";

/** User settings interface. */
export default interface Settings {
  /** The unit to be used for speed values. */
  speedUnit: SpeedUnit;
  /** The unit to be used for temperature values. */
  temperatureUnit: TemperatureUnit;
}
