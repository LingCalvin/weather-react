import { PressureUnit } from "../enums/pressure-unit";
import { ValueWithUnit } from "../interfaces/value-with-unit";

export type Pressure = ValueWithUnit<number, PressureUnit>;
