import { SpeedUnit } from "../enums/speed-unit.enum";
import Speed from "../interfaces/speed";

/**
 * Returns a formatted speed string.
 *
 * @returns The speed formatted as a string
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

/**
 * Converts a `Speed` object to meters per second.
 *
 * @returns A `Speed` object with a value in meters per second
 */
function convertToMetersPerSecond({ value, unit }: Speed): Speed {
  switch (unit) {
    case SpeedUnit.KilometersPerHour:
      return { value: value / 3.6, unit: SpeedUnit.MetersPerSecond };
    case SpeedUnit.MetersPerSecond:
      return { value, unit };
    case SpeedUnit.MilesPerHour:
      return { value: value / 2.237, unit: SpeedUnit.MetersPerSecond };
  }
}

/**
 * Converts a speed to the target unit.
 *
 * @param speed - The speed to convert
 * @param targetUnit - The unit to convert `speed` to
 * @returns The `Speed` object converted to `targetUnit`
 */
export function convert(speed: Speed, targetUnit: SpeedUnit): Speed {
  const { value: valueInMetersPerSecond } = convertToMetersPerSecond(speed);
  switch (targetUnit) {
    case SpeedUnit.KilometersPerHour:
      return { value: valueInMetersPerSecond * 3.6, unit: targetUnit };
    case SpeedUnit.MetersPerSecond:
      return { value: valueInMetersPerSecond, unit: targetUnit };
    case SpeedUnit.MilesPerHour:
      return { value: valueInMetersPerSecond * 2.237, unit: targetUnit };
  }
}

/**
 * Rounds a speed to the nearest integer.
 *
 * @returns The `Speed` object with value rounded to the nearest integer
 */
export function round({ value, ...rest }: Speed): Speed {
  return { value: Math.round(value), ...rest };
}
