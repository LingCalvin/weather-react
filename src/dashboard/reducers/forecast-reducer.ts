import ForecastState from "../interfaces/forecast-state";

type Action = { type: "updateForecast"; payload: Partial<ForecastState> };

export default function forecastReducer(
  state: ForecastState,
  action: Action
): ForecastState {
  switch (action.type) {
    case "updateForecast":
      return { ...state, ...action.payload };
  }
}
