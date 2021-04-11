import Coordinates from "../../common/interfaces/coordinates";
import ForecastResponse from "../../nws/interfaces/forecast-response";
import StationObservationsResponse from "../../nws/interfaces/station-observations-response";

export default interface ForecastState {
  city: string | null;
  state: string | null;
  location: Coordinates | null;
  forecast: ForecastResponse | null;
  hourlyForecast: ForecastResponse | null;
  stationId: string | null;
  observation: StationObservationsResponse | null;
}
