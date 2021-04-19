import { TemperatureUnit } from "../../dashboard/enums/temperature-unit";

export function toString(temperatureUnit: TemperatureUnit): string {
  switch (temperatureUnit) {
    case TemperatureUnit.Celsius:
      return "Celsius";
    case TemperatureUnit.Fahrenheit:
      return "Fahrenheit";
    case TemperatureUnit.Kelvin:
      return "Kelvin";
  }
}
