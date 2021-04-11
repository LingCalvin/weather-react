import { FeatureCollection, Feature as GeoJSONFeature, Point } from "geojson";

export default interface StationsResponse extends FeatureCollection {
  features: Feature[];
  observationStations: string[];
}

interface Feature extends GeoJSONFeature {
  id: string;
  geometry: Point;
  properties: {
    "@id": string;
    "@type": "wx:ObservationStation";
    elevation: {
      value: number;
      unitCode: string;
    };
    stationIdentifier: string;
    name: string;
    timeZone: string;
    forecast: string;
    county: string;
    fireWeatherZone: string;
  };
}
