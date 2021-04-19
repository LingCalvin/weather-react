import { SpeedUnit } from "../../dashboard/enums/speed-unit.enum";
import { TemperatureUnit } from "../../dashboard/enums/temperature-unit";

/** User settings interface. */
export default interface Settings {
  /** The unit to be used for speed values. */
  speedUnit: SpeedUnit;
  /** The unit to be used for temperature values. */
  temperatureUnit: TemperatureUnit;
}
