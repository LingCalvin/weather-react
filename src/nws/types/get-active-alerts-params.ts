import {
  GetActiveAlertsBaseParams,
  GetActiveAlertsByAreaParams,
  GetActiveAlertsByPointParams,
  GetActiveAlertsByRegionParams,
  GetActiveAlertsByRegionTypeParams,
  GetActiveAlertsByZoneParams,
} from "../interfaces/get-active-alerts-params";

export type GetActiveAlertsParams =
  | GetActiveAlertsBaseParams
  | GetActiveAlertsByRegionTypeParams
  | GetActiveAlertsByPointParams
  | GetActiveAlertsByRegionParams
  | GetActiveAlertsByAreaParams
  | GetActiveAlertsByZoneParams;
