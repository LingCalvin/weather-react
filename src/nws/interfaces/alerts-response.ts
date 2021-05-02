import { Feature, FeatureCollection } from "geojson";
import { Certainty } from "../types/certainty";
import { MessageType } from "../types/message-type";
import { Severity } from "../types/severity";
import { Status } from "../types/status";
import { Urgency } from "../types/urgency";

export default interface AlertsResponse extends FeatureCollection {
  features: AlertFeature[];
  title: string;
  updated: string;
}

interface AlertFeature extends Feature {
  properties: {
    id: string;
    affectedZones: string[];
    sent: string;
    effective: string;
    onset: string | null;
    expires: string;
    ends: string | null;
    status: Status;
    messageType: MessageType;
    category: string;
    severity: Severity;
    certainty: Certainty;
    urgency: Urgency;
    event: string;
    sender: string;
    senderName: string;
    headline: string | null;
    description: string;
    instruction: string;
    response: string;
    parameters: {
      PIL: string[];
      NWSheadline: string[];
      BLOCKCHANNEL: string[];
    };
  };
}
