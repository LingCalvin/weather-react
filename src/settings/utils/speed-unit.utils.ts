import { SpeedUnit } from "../../dashboard/enums/speed-unit.enum";

export function toString(speedUnit: SpeedUnit): string {
  switch (speedUnit) {
    case SpeedUnit.KilometersPerHour:
      return "Kilometers per hour";
    case SpeedUnit.MetersPerSecond:
      return "Meters per second";
    case SpeedUnit.MilesPerHour:
      return "Miles per hour";
  }
}
