import React, { useEffect, useState } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { MyLocation as MyLocationIcon } from "@material-ui/icons";
import geolocationService from "../../common/services/geolocation.service";
import nwsService from "../../nws/services/nws.service";
import ForecastResponse from "../../nws/interfaces/forecast-response";
import localStorageService from "../../common/services/localStorage.service";
import Coordinates from "../../common/interfaces/coordinates";
import useNetworkStatus from "../../common/hooks/useNetworkStatus";

export default function DashboardPage() {
  const isOnline = useNetworkStatus();
  const [location, setLocation] = useState<Coordinates | null>(
    localStorageService.getItem("location")
  );
  const [city, setCity] = useState<string | null>(
    localStorageService.getItem("city")
  );
  const [state, setState] = useState<string | null>(
    localStorageService.getItem("state")
  );
  const [forecast, setForecast] = useState<ForecastResponse | null>(
    localStorageService.getItem("forecast")
  );
  const [hourlyForecast, setHourlyForecast] = useState<ForecastResponse | null>(
    localStorageService.getItem("hourlyForecast")
  );

  // Fetch forecast data when the location gets updated
  useEffect(() => {
    async function fetchData() {
      if (!location || !isOnline) {
        return;
      }
      const {
        properties: {
          relativeLocation: {
            properties: { city, state },
          },
          gridId,
          gridX,
          gridY,
        },
      } = await nwsService.getPointInfo(location.latitude, location.longitude);
      const forecastRes = await nwsService.getForecast(gridId, gridX, gridY);
      const hourlyForecastRes = await nwsService.getHourlyForecast(
        gridId,
        gridX,
        gridY
      );
      setCity(city);
      setState(state);
      setForecast(forecastRes);
      setHourlyForecast(hourlyForecastRes);
    }

    fetchData();
  }, [isOnline, location]);

  // Save information about the last location and forecast retrieved so it can
  // be used after the application has been closed
  useEffect(() => {
    localStorageService.setItem("location", location);
    localStorageService.setItem("city", city);
    localStorageService.setItem("state", state);
    localStorageService.setItem("forecast", forecast);
    localStorageService.setItem("hourlyForecast", hourlyForecast);
  }, [city, forecast, hourlyForecast, location, state]);

  const updateLocation = () => {
    geolocationService.getCurrentPosition().then(({ coords }) => {
      setLocation({ latitude: coords.latitude, longitude: coords.longitude });
    });
  };

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
        </Toolbar>
      </AppBar>
    </>
  );
}
