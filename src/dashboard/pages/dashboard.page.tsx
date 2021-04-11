import { useCallback, useEffect, useReducer, useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  MoreVert as MoreVertIcon,
  MyLocation as MyLocationIcon,
} from "@material-ui/icons";
import geolocationService from "../../common/services/geolocation.service";
import nwsService from "../../nws/services/nws.service";
import localStorageService from "../../common/services/localStorage.service";
import useNetworkStatus from "../../common/hooks/use-network-status";
import WeatherCard from "../components/weather-card";
import forecastReducer from "../reducers/forecast-reducer";
import ForecastState from "../interfaces/forecast-state";
import useSerializeValue from "../../common/hooks/use-serialize-value";
import Menu from "../components/menu";
import Coordinates from "../../common/interfaces/coordinates";
import useStyles from "./dashboard.styles";
import HourlyForecastGridList from "../components/hourly-forecast-grid-list";

function initializeForecastState(): ForecastState {
  return {
    location: localStorageService.getItem("location"),
    city: localStorageService.getItem("city"),
    state: localStorageService.getItem("state"),
    forecast: localStorageService.getItem("forecast"),
    hourlyForecast: localStorageService.getItem("hourlyForecast"),
    stationId: localStorageService.getItem("stationId"),
    observation: localStorageService.getItem("observation"),
  };
}

/**
 * Returns a new `ForecastState` based on `location`.
 *
 * @param location - The location to get the forecast for
 * @returns A `Promise` for the new `ForecastState`
 */
async function getForecast(location: Coordinates): Promise<ForecastState> {
  const {
    properties: {
      relativeLocation: {
        properties: { city, state },
      },
      gridId: wfo,
      gridX: x,
      gridY: y,
    },
  } = await nwsService.getPointInfo(location.latitude, location.longitude);
  const forecastRes = await nwsService.getForecast({ wfo, x, y });
  const hourlyForecastRes = await nwsService.getHourlyForecast({
    wfo,
    x,
    y,
  });
  const stationsRes = await nwsService.getStations({ wfo, x, y });
  const stationId = stationsRes.features[0].properties.stationIdentifier;
  const observationRes = await nwsService.getStationObservations({
    stationId,
    limit: 1, // Only get the most recent observation
  });
  return {
    location,
    city,
    state,
    forecast: forecastRes,
    hourlyForecast: hourlyForecastRes,
    stationId,
    observation: observationRes,
  };
}

export default function DashboardPage() {
  const classes = useStyles();
  const isOnline = useNetworkStatus();
  const [loading, setLoading] = useState(false);
  const [forecastState, forecastStateDispatch] = useReducer(
    forecastReducer,
    undefined,
    initializeForecastState
  );

  const {
    location,
    city,
    state,
    forecast,
    hourlyForecast,
    observation,
    stationId,
  } = forecastState;

  const currentWeather = observation?.features[0].properties ?? null;

  const updateForecast = useCallback((location: Coordinates) => {
    setLoading(true);
    getForecast(location)
      .then((state) =>
        forecastStateDispatch({ type: "updateForecast", payload: state })
      )
      .finally(() => setLoading(false));
  }, []);

  // Fetch forecast data when the location gets updated
  useEffect(() => {
    if (!location || !isOnline) {
      return;
    }
    updateForecast(location);
  }, [isOnline, location, updateForecast]);

  // Save information about the last location and forecast retrieved so it can
  // be used after the application has been closed
  useSerializeValue("location", location);
  useSerializeValue("city", city);
  useSerializeValue("state", state);
  useSerializeValue("forecast", forecast);
  useSerializeValue("hourlyForecast", hourlyForecast);
  useSerializeValue("forecastState", forecastState);
  useSerializeValue("station", stationId);
  useSerializeValue("observation", observation);

  const currentDate = new Date();
  const endDate = new Date(currentDate);
  endDate.setDate(endDate.getDate() + 1);
  endDate.setHours(0, 0, 0, 0);
  const currentHourlyPeriods = hourlyForecast?.properties.periods.filter(
    ({ endTime, startTime }) =>
      new Date(endTime) > currentDate && new Date(startTime) < endDate
  );

  const updateLocation = () => {
    geolocationService.getCurrentPosition().then(({ coords }) => {
      forecastStateDispatch({
        type: "updateForecast",
        payload: {
          location: { latitude: coords.latitude, longitude: coords.longitude },
        },
      });
    });
  };

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">
            {city || state
              ? `${city ?? "Unknown"}, ${state ?? "Unknown"}`
              : "Unknown"}
          </Typography>
          <IconButton color="inherit" onClick={updateLocation}>
            <MyLocationIcon />
          </IconButton>
          <Box className={classes.spacer} />
          <IconButton
            color="inherit"
            edge="end"
            onClick={(e) => setMenuAnchor(e.currentTarget)}
          >
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
        onRefreshClicked={() => {
          setMenuAnchor(null);
          if (!location || !isOnline) {
            return;
          }
          updateForecast(location);
        }}
      />
      {loading && <LinearProgress color="secondary" />}
      <main className={classes.main}>
        {currentWeather !== null && (
          <WeatherCard
            temperature={Math.round(currentWeather.temperature.value ?? NaN)}
            temperatureUnit="C"
            icon={currentWeather.icon}
            shortForecast={currentWeather.textDescription}
            updateTime={new Date(currentWeather.timestamp)}
          />
        )}
        <HourlyForecastGridList periods={currentHourlyPeriods ?? []} />
      </main>
    </>
  );
}
