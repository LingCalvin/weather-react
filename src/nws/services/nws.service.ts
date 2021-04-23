import axios, { AxiosInstance } from "axios";
import { ForecastType } from "../enums/forecast-type";
import { SpeedUnit } from "../enums/speed-unit";
import { TemperatureUnit } from "../enums/temperature-unit";
import { Forecast, Period } from "../interfaces/forecast";
import ForecastResponse, {
  Period as RawPeriod,
} from "../interfaces/forecast-response";
import { Observation } from "../interfaces/observation";
import { PointInfo } from "../interfaces/point-info";
import PointInfoResponse from "../interfaces/point-info-response";
import { Station } from "../interfaces/station";
import StationObservationsResponse from "../interfaces/station-observations-response";
import StationsResponse from "../interfaces/stations-response";
import { Speed } from "../types/speed";
import { Temperature } from "../types/temperature";

class NWSService {
  constructor(private apiClient: AxiosInstance) {}

  async getPointInfoRaw(
    latitude: number,
    longitude: number
  ): Promise<PointInfoResponse> {
    return (await this.apiClient.get(`/points/${latitude},${longitude}`)).data;
  }

  async getPointInfo(latitude: number, longitude: number): Promise<PointInfo> {
    const rawPointInfo = await this.getPointInfoRaw(latitude, longitude);
    return {
      coordinates: [
        rawPointInfo.geometry.coordinates[0],
        rawPointInfo.geometry.coordinates[1],
      ],
      gridId: rawPointInfo.properties.gridId,
      gridX: rawPointInfo.properties.gridX,
      gridY: rawPointInfo.properties.gridY,
      timeZone: rawPointInfo.properties.timeZone,
      radarStation: rawPointInfo.properties.timeZone,
      relativeLocation: {
        city: rawPointInfo.properties.relativeLocation.properties.city,
        state: rawPointInfo.properties.relativeLocation.properties.state,
      },
    };
  }

  async getRawForecast({
    wfo,
    x,
    y,
  }: GridPointsParams): Promise<ForecastResponse> {
    return (await this.apiClient.get(`/gridpoints/${wfo}/${x},${y}/forecast`))
      .data;
  }

  async getForecast(params: GridPointsParams): Promise<Forecast> {
    return convertForecastResponseToForecast(await this.getRawForecast(params));
  }

  async getRawHourlyForecast({
    wfo,
    x,
    y,
  }: GridPointsParams): Promise<ForecastResponse> {
    return (
      await this.apiClient.get(`/gridpoints/${wfo}/${x},${y}/forecast/hourly`)
    ).data;
  }

  async getHourlyForecast(params: GridPointsParams): Promise<Forecast> {
    return convertForecastResponseToForecast(
      await this.getRawHourlyForecast(params)
    );
  }

  async getRawStations({
    wfo,
    x,
    y,
  }: GridPointsParams): Promise<StationsResponse> {
    return (await this.apiClient.get(`/gridpoints/${wfo}/${x},${y}/stations`))
      .data;
  }

  async getStations(params: GridPointsParams): Promise<Station[]> {
    const { features } = await this.getRawStations(params);
    return features.map(({ properties }) => ({
      id: properties.stationIdentifier,
      name: properties.name,
      timeZone: properties.timeZone,
    }));
  }

  async getRawStationObservations({
    stationId,
    ...queryParams
  }: GetStationObservationsParams): Promise<StationObservationsResponse> {
    return (
      await this.apiClient.get(`/stations/${stationId}/observations`, {
        params: queryParams,
      })
    ).data;
  }

  async getStationObservations(
    params: GetStationObservationsParams
  ): Promise<Observation[]> {
    const { features } = await this.getRawStationObservations(params);
    return features.map(({ properties }) => ({
      station: properties.station, // NOTE: Not ID
      timestamp: new Date(properties.timestamp),
      description: properties.textDescription,
      icon: properties.icon,
      temperature:
        properties.temperature.value !== null
          ? convertTemperature(
              properties.temperature.value,
              properties.temperature.unitCode
            )
          : undefined,
      windDirection: properties.windDirection.value ?? undefined,
      windSpeed:
        properties.windSpeed.value !== null
          ? convertSpeed(
              properties.windSpeed.value,
              properties.windSpeed.unitCode
            )
          : undefined,
      windGust:
        properties.windGust.value !== null
          ? convertSpeed(
              properties.windGust.value,
              properties.windGust.unitCode
            )
          : undefined,
    }));
  }
}

interface GetStationObservationsParams {
  stationId: string;
  station?: string[];
  start?: string;
  end?: string;
  limit?: number;
}

interface GridPointsParams {
  wfo: string;
  x: number;
  y: number;
}

const nwsService = new NWSService(
  axios.create({
    baseURL: "https://api.weather.gov",
    headers: { Accept: "application/geo+json" },
  })
);

export default nwsService;

function convertTemperature(value: number, unit: string): Temperature {
  if (unit === "C" || unit === "unit:degC") {
    return { value, unit: TemperatureUnit.Celsius };
  }
  if (unit === "F") {
    return { value, unit: TemperatureUnit.Fahrenheit };
  }
  if (unit === "K") {
    return { value, unit: TemperatureUnit.Kelvin };
  }
  throw new Error("Unexpected unit code.");
}

function convertRawPeriodToPeriod(rawPeriod: RawPeriod): Period {
  return {
    name: rawPeriod.name,
    startTime: new Date(rawPeriod.startTime),
    endTime: new Date(rawPeriod.endTime),
    isDayTime: rawPeriod.isDaytime,
    temperature: convertTemperature(
      rawPeriod.temperature,
      rawPeriod.temperatureUnit
    ),
    icon: rawPeriod.icon,
    shortForecast: rawPeriod.shortForecast,
    detailedForecast: rawPeriod.detailedForecast,
  };
}

function convertForecastResponseToForecast({
  properties,
}: ForecastResponse): Forecast {
  return {
    updatedTime: new Date(properties.updateTime),
    type: ForecastType.Daily,
    periods: properties.periods.map(convertRawPeriodToPeriod),
  };
}

function convertSpeed(value: number, unit: string): Speed {
  if (unit === "unit:km_h-1") {
    return { value, unit: SpeedUnit.KilometersPerHour };
  }
  throw new Error("Unexpected unit code.");
}
