import { Feature, Point } from "geojson";

export default interface PointInfoResponse extends Feature {
  id: string;
  geometry: Point;
  properties: {
    "@id": string;
    "@type": string;
    cwa: string;
    forecastOffice: string;
    gridId: string;
    gridX: number;
    gridY: number;
    forecast: string;
    forecastHourly: string;
    forecastGridData: string;
    observationStations: string;
    relativeLocation: RelativeLocation;
    forecastZone: string;
    county: string;
    fireWeatherZone: string;
    timeZone: string;
    radarStation: string;
  };
}

interface RelativeLocation extends Feature {
  properties: {
    city: string;
    state: string;
    distance: {
      value: number;
      unitCode: string;
    };
    bearing: {
      value: number;
      unitCode: string;
    };
  };
}
