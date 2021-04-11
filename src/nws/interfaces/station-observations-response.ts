import { Feature, FeatureCollection, Point } from "geojson";

export default interface StationObservationsResponse extends FeatureCollection {
  features: ObservationFeature[];
}

interface ObservationFeature extends Feature {
  id: string;
  geometry: Point;
  properties: {
    "@id": string;
    "@type": string;
    elevation: {
      value: number;
      unitCode: string;
    };
    station: string;
    timestamp: string;
    rawMessage: string;
    textDescription: string;
    icon: string;
    presentWeather: PresentWeatherItem[];
    temperature: ValueProperty;
    dewpoint: ValueProperty;
    windDirection: ValueProperty;
    windSpeed: ValueProperty;
    windGust: ValueProperty;
    barometricPressure: ValueProperty;
    seaLevelPressure: ValueProperty;
    visibility: ValueProperty;
    maxTemperatureLast24Hours: ValueProperty;
    minTemperatureLast24Hours: ValueProperty;
    precipitationLastHour: ValueProperty;
    precipitationLast3Hours: ValueProperty;
    precipitationLast6Hours: ValueProperty;
    relativeHumidity: ValueProperty;
    windChill: ValueProperty;
    heatIndex: ValueProperty;
    cloudLayers: CloudLayer[];
  };
}

interface PresentWeatherItem {
  intensity: string | null;
  modifier: null; // FIXME: Could not find an example of this
  weather: string;
  rawString: string;
}

interface ValueProperty {
  value: number | null;
  unitCode: string;
  qualityControl: string;
}

interface CloudLayer {
  base: {
    value: number | null;
    unitCode: string;
  };
  amount: string;
}
