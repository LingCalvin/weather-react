import { SpeedUnit } from "../enums/speed-unit.enum";
import Speed from "../interfaces/speed";

/**
 * Returns a formatted speed string.
 *
 * @returns The speed formatted as a string.
 */
export function format({ value, unit }: Speed): string {
  switch (unit) {
    case SpeedUnit.KilometersPerHour:
      return `${value} km/h`;
    case SpeedUnit.MetersPerSecond:
      return `${value} m/s`;
    case SpeedUnit.MilesPerHour:
      return `${value} mph`;
    default:
      return `${value}`;
  }
}
