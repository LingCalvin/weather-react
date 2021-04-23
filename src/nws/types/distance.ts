import { DistanceUnit } from "../enums/distance-unit";
import { ValueWithUnit } from "../interfaces/value-with-unit";

export type Distance = ValueWithUnit<number, DistanceUnit>;
