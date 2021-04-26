import { ResponseFormat } from "../types/response-format";
import Extent from "./extent";

export default interface FindAddressCandidatesParams {
  f: ResponseFormat;
  SingeLine?: string;
  address?: string;
  address2?: string;
  address3?: string;
  neighborhood?: string;
  city?: string;
  subregion?: string;
  region?: string;
  postal?: string;
  postalExt?: string;
  countryCode?: string;
  magicKey?: string;
  searchExtent?:
    | [number, number, number, number]
    | (Extent & { spatialReference: SpatialReference });
  location?:
    | [number, number]
    | { x: number; y: number; spatialReference: SpatialReference };
  category?: string | string[];
  outSR?: string;
  outFields?: string[];
  maxLocations?: OneToFifty;
  forStorage?: boolean;
  matchOutOfRange?: boolean;
  locationType?: string;
  langCode?: string;
  sourceCountry?: string | string[];
  preferredLabelValues: PreferredLabelValue | PreferredLabelValue[];
}

interface SpatialReference {
  wkid: string;
}

type OneToFifty =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50;

type PreferredLabelValue =
  | "postalCity"
  | "localCity"
  | "matchedCity"
  | "primaryStreet"
  | "matchedStreet";
