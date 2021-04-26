import { ResponseFormat } from "../types/response-format";

export default interface SuggestParams {
  text: string;
  f: ResponseFormat;
  location?:
    | [number, number]
    | { x: number; y: number; spatialReference: SpatialReference };
  category?: string | string[];
  searchExtend?:
    | [number, number, number, number]
    | {
        xmin: number;
        ymin: number;
        xmax: number;
        ymax: number;
        spatialReference: SpatialReference;
      };
  maxSuggestions?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15;
  countryCode?: string;
}

interface SpatialReference {
  wkid: number;
}
