import axios, { AxiosInstance } from "axios";
import ForecastResponse from "../interfaces/forecast-response";
import PointInfo from "../interfaces/point-info";

class NWSService {
  constructor(private apiClient: AxiosInstance) {}

  async getPointInfo(latitude: number, longitude: number): Promise<PointInfo> {
    return (await this.apiClient.get(`/points/${latitude},${longitude}`)).data;
  }

  async getForecast(
    office: string,
    gridX: number,
    gridY: number
  ): Promise<ForecastResponse> {
    return (
      await this.apiClient.get(
        `/gridpoints/${office}/${gridX},${gridY}/forecast`
      )
    ).data;
  }

  async getHourlyForecast(
    office: string,
    gridX: number,
    gridY: number
  ): Promise<ForecastResponse> {
    return (
      await this.apiClient.get(
        `/gridpoints/${office}/${gridX},${gridY}/forecast/hourly`
      )
    ).data;
  }
}

const nwsService = new NWSService(
  axios.create({
    baseURL: "https://api.weather.gov",
    headers: { Accept: "application/geo+json" },
  })
);

export default nwsService;
