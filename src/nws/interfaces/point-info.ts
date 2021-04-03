import { Feature } from "geojson";

export default interface PointInfo extends Feature {
  id: string;
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
