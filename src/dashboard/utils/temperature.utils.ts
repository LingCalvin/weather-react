import { TemperatureUnit } from "../enums/temperature-unit";
import Temperature from "../interfaces/temperature";

/**
 * Returns a formatted temperature string.
 *
 * @param value - The temperature sans unit
 * @param unit - The unit
 * @returns The temperature formatted as a string
 */
export function format({ value, unit }: Temperature): string {
  switch (unit) {
    case TemperatureUnit.Celsius:
      return `${value}℃`;
    case TemperatureUnit.Fahrenheit:
      return `${value}℉`;
    case TemperatureUnit.Kelvin:
      return `${value}K`;
    default:
      return `${value}`;
  }
}

/**
 * Converts temperature to Kelvin.
 *
 * @returns A `Temperature` object in Kelvin
 */
function covertToKelvin({ value, unit }: Temperature): Temperature {
  switch (unit) {
    case TemperatureUnit.Celsius:
      return { value: value + 273.15, unit: TemperatureUnit.Kelvin };
    case TemperatureUnit.Fahrenheit:
      return {
        value: ((value - 32) * 5) / 9 + 273.15,
        unit: TemperatureUnit.Kelvin,
      };
    case TemperatureUnit.Kelvin:
      return { value, unit };
  }
}

/**
 * Converts a temperature to a specified unit.
 *
 * @param temperature - The temperature to convert
 * @param targetUnit - The target unit
 * @returns The `temperature` in `targetUnit`
 */
export function convert(
  temperature: Temperature,
  targetUnit: TemperatureUnit
): Temperature {
  const { value: kelvinValue } = covertToKelvin(temperature);
  switch (targetUnit) {
    case TemperatureUnit.Celsius:
      return { value: kelvinValue - 273.15, unit: targetUnit };
    case TemperatureUnit.Fahrenheit:
      return {
        value: ((kelvinValue - 273.15) * 9) / 5 + 32,
        unit: targetUnit,
      };
    case TemperatureUnit.Kelvin:
      return { value: kelvinValue, unit: targetUnit };
  }
}

/**
 * Rounds a temperature to the nearest integer.
 *
 * @returns A `Temperature` object with value rounded to the nearest integer
 */
export function round({ value, ...rest }: Temperature): Temperature {
  return { value: Math.round(value), ...rest };
}
