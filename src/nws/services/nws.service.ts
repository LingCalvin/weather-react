import axios, { AxiosInstance } from "axios";
import ForecastResponse from "../interfaces/forecast-response";
import PointInfo from "../interfaces/point-info";
import StationObservationsResponse from "../interfaces/station-observations-response";
import StationsResponse from "../interfaces/stations-response";

class NWSService {
  constructor(private apiClient: AxiosInstance) {}

  async getPointInfo(latitude: number, longitude: number): Promise<PointInfo> {
    return (await this.apiClient.get(`/points/${latitude},${longitude}`)).data;
  }

  async getForecast({
    wfo,
    x,
    y,
  }: GridPointsParams): Promise<ForecastResponse> {
    return (await this.apiClient.get(`/gridpoints/${wfo}/${x},${y}/forecast`))
      .data;
  }

  async getHourlyForecast({
    wfo,
    x,
    y,
  }: GridPointsParams): Promise<ForecastResponse> {
    return (
      await this.apiClient.get(`/gridpoints/${wfo}/${x},${y}/forecast/hourly`)
    ).data;
  }

  async getStations({
    wfo,
    x,
    y,
  }: GridPointsParams): Promise<StationsResponse> {
    return (await this.apiClient.get(`/gridpoints/${wfo}/${x},${y}/stations`))
      .data;
  }

  async getStationObservations({
    stationId,
    ...queryParams
  }: GetStationObservationsParams): Promise<StationObservationsResponse> {
    return (
      await this.apiClient.get(`/stations/${stationId}/observations`, {
        params: queryParams,
      })
    ).data;
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
