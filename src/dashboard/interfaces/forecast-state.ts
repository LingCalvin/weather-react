import Coordinates from "../../common/interfaces/coordinates";
import { Forecast } from "../../nws/interfaces/forecast";
import { Observation } from "../../nws/interfaces/observation";

export default interface ForecastState {
  city: string | null;
  state: string | null;
  location: Coordinates | null;
  forecast: Forecast | null;
  hourlyForecast: Forecast | null;
  stationId: string | null;
  observations: Observation[] | null;
}
