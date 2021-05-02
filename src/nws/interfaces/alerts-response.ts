import { Feature, FeatureCollection } from "geojson";
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
    status: string;
    messageType: string;
    category: string;
    severity: string;
    certainty: string;
    urgency: string;
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
