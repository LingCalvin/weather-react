import axios, { AxiosInstance } from "axios";
import { DistanceUnit } from "../enums/distance-unit";
import { ForecastType } from "../enums/forecast-type";
import { PressureUnit } from "../enums/pressure-unit";
import { SpeedUnit } from "../enums/speed-unit";
import { TemperatureUnit } from "../enums/temperature-unit";
import UnexpectedUnitCodeException from "../exceptions/unexpected-unit-code.exceptions";
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
import { Distance } from "../types/distance";
import { Pressure } from "../types/pressure";
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
      temperature: convertTemperature(properties.temperature),
      windDirection: properties.windDirection.value ?? undefined,
      windSpeed: convertSpeed(properties.windSpeed),
      windGust: convertSpeed(properties.windGust),
      barometricPressure: convertPressure(properties.barometricPressure),
      seaLevelPressure: convertPressure(properties.seaLevelPressure),
      visibility: convertDistance(properties.visibility),
      maxTemperatureLast24Hours: convertTemperature(
        properties.maxTemperatureLast24Hours
      ),
      minTemperatureLast24Hours: convertTemperature(
        properties.minTemperatureLast24Hours
      ),
      precipitationLastHour: convertDistance(properties.precipitationLastHour),
      precipitationLast3Hours: convertDistance(
        properties.precipitationLast3Hours
      ),
      precipitationLast6Hours: convertDistance(
        properties.precipitationLast6Hours
      ),
      relativeHumidity: convertRelativeHumidity(properties.relativeHumidity),
      windChill: convertTemperature(properties.windChill),
      heatIndex: convertTemperature(properties.heatIndex),
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

// Internal conversion functions

function convertRawPeriodToPeriod(rawPeriod: RawPeriod): Period {
  return {
    name: rawPeriod.name,
    startTime: new Date(rawPeriod.startTime),
    endTime: new Date(rawPeriod.endTime),
    isDayTime: rawPeriod.isDaytime,
    temperature: convertTemperature({
      value: rawPeriod.temperature,
      unitCode: rawPeriod.temperatureUnit,
    }),
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

function convertDistance({
  value,
  unitCode,
}: PossiblyNullValueWithUnitCode): Distance | undefined {
  if (value === null) {
    return undefined;
  }
  if (unitCode === "unit:in") {
    return { value, unit: DistanceUnit.Inch };
  }
  if (unitCode === "unit:m") {
    return { value, unit: DistanceUnit.Meter };
  }
  if (unitCode === "unit:km") {
    return { value, unit: DistanceUnit.Kilometer };
  }
  throw new UnexpectedUnitCodeException(unitCode);
}

function convertRelativeHumidity({
  value,
  unitCode,
}: PossiblyNullValueWithUnitCode): number | undefined {
  if (value === null) {
    return undefined;
  }
  if (unitCode === "unit:percent") {
    return value;
  }
  throw new UnexpectedUnitCodeException(unitCode);
}

function convertSpeed({
  value,
  unitCode,
}: PossiblyNullValueWithUnitCode): Speed | undefined {
  if (value === null) {
    return undefined;
  }
  if (unitCode === "unit:km_h-1") {
    return { value, unit: SpeedUnit.KilometersPerHour };
  }
  throw new UnexpectedUnitCodeException(unitCode);
}

function convertTemperature(params: {
  value: null;
  unitCode: string;
}): undefined;
function convertTemperature(params: {
  value: number;
  unitCode: string;
}): Temperature;
function convertTemperature(
  params: PossiblyNullValueWithUnitCode
): Temperature | undefined;
function convertTemperature({
  value,
  unitCode,
}: PossiblyNullValueWithUnitCode): Temperature | undefined {
  if (value === null) {
    return undefined;
  }
  if (unitCode === "C" || unitCode === "unit:degC") {
    return { value, unit: TemperatureUnit.Celsius };
  }
  if (unitCode === "F") {
    return { value, unit: TemperatureUnit.Fahrenheit };
  }
  if (unitCode === "K") {
    return { value, unit: TemperatureUnit.Kelvin };
  }
  throw new UnexpectedUnitCodeException(unitCode);
}

function convertPressure({
  value,
  unitCode,
}: PossiblyNullValueWithUnitCode): Pressure | undefined {
  if (value === null) {
    return undefined;
  }
  if (unitCode === "unit:Pa") {
    return { value, unit: PressureUnit.Pascal };
  }
  throw new UnexpectedUnitCodeException(unitCode);
}

type PossiblyNullValueWithUnitCode = { value: number | null; unitCode: string };
