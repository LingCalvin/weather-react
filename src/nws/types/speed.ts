import { SpeedUnit } from "../enums/speed-unit";
import { ValueWithUnit } from "../interfaces/value-with-unit";

export type Speed = ValueWithUnit<number, SpeedUnit>;
