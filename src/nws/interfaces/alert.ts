import { Certainty } from "../types/certainty";
import { MessageType } from "../types/message-type";
import { Severity } from "../types/severity";
import { Status } from "../types/status";
import { Urgency } from "../types/urgency";

export default interface Alert {
  id: string;
  sent: Date;
  effective: Date;
  onset: Date | null;
  expires: Date;
  ends: Date | null;
  status: Status;
  messageType: MessageType;
  category: string;
  severity: Severity;
  certainty: Certainty;
  urgency: Urgency;
  event: string;
  sender: string;
  senderName: string;
  headline: string;
  description: string;
  instruction: string;
  response: string;
  parameters: {
    PIL: string[];
    NWSheadline: string[];
    BLOCKCHANNEL: string[];
  };
}
