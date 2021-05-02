import { Area } from "../types/area";
import { Certainty } from "../types/certainty";
import { MessageType } from "../types/message-type";
import { Region } from "../types/region";
import { RegionType } from "../types/region-type";
import { Severity } from "../types/severity";
import { Status } from "../types/status";
import { Urgency } from "../types/urgency";

export interface GetActiveAlertsBaseParams {
  status?: Status[];
  message_type?: MessageType[];
  event?: string[];
  code?: string[];
  urgency?: Urgency[];
  severity?: Severity[];
  certainty?: Certainty[];
  limit?: number;
}

export interface GetActiveAlertsByRegionTypeParams
  extends GetActiveAlertsBaseParams {
  region_type?: RegionType;
}

export interface GetActiveAlertsByPointParams
  extends GetActiveAlertsBaseParams {
  point?: string;
}

export interface GetActiveAlertsByRegionParams
  extends GetActiveAlertsBaseParams {
  region?: Region[];
}

export interface GetActiveAlertsByAreaParams extends GetActiveAlertsBaseParams {
  area?: Area[];
}

export interface GetActiveAlertsByZoneParams extends GetActiveAlertsBaseParams {
  zone?: string[];
}
