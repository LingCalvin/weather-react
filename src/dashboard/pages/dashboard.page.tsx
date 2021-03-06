import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  LinearProgress,
  Link,
} from "@material-ui/core";
import {
  CalendarToday as CalendarTodayIcon,
  Schedule as ScheduleIcon,
  Warning as WarningIcon,
} from "@material-ui/icons";
import { Alert, TabContext, TabPanel } from "@material-ui/lab";
import nwsService from "../../nws/services/nws.service";
import localStorageService from "../../common/services/local-storage.service";
import useNetworkStatus from "../../common/hooks/use-network-status";
import forecastReducer from "../reducers/forecast-reducer";
import ForecastState from "../interfaces/forecast-state";
import useSerializeValue from "../../common/hooks/use-serialize-value";
import Menu from "../components/menu";
import Coordinates from "../../common/interfaces/coordinates";
import useStyles from "./dashboard.page.styles";
import HourlyForecastPage from "./hourly-forecast.page";
import { useHistory } from "react-router";
import routes from "../../common/constants/routes.json";
import * as TemperatureUtils from "../utils/temperature.utils";
import * as SpeedUtils from "../utils/speed.utils";
import { SettingsContext } from "../../settings/contexts/settings.context";
import DailyForecastPage from "./daily-forecast.page";
import { SpeedUnit } from "../../nws/enums/speed-unit";
import { TemperatureUnit } from "../../nws/enums/temperature-unit";
import { Speed } from "../../nws/types/speed";
import { Temperature } from "../../nws/types/temperature";
import { Forecast } from "../../nws/interfaces/forecast";
import AppBar from "../components/app-bar";
import AlertsPage from "./alerts.page";

function initializeForecastState(): ForecastState {
  return (
    localStorageService.getItem("cachedForecast", (key, value) => {
      const upperCasedKey = key.toLocaleUpperCase();
      if (upperCasedKey.includes("TIME") || upperCasedKey.includes("DATE")) {
        return new Date(value);
      }
      return value;
    }) ?? {
      location: null,
      city: null,
      state: null,
      forecast: null,
      hourlyForecast: null,
      stationId: null,
      observations: null,
    }
  );
}

/**
 * Returns a new `ForecastState` based on `location`.
 *
 * @param location - The location to get the forecast for
 * @returns A `Promise` for the new `ForecastState`
 */
async function getForecast(location: Coordinates): Promise<ForecastState> {
  try {
    const {
      relativeLocation: { city, state },
      gridId: wfo,
      gridX: x,
      gridY: y,
    } = await nwsService.getPointInfo(location.latitude, location.longitude);
    const forecast = await nwsService.getForecast({ wfo, x, y });
    const hourlyForecast = await nwsService.getHourlyForecast({
      wfo,
      x,
      y,
    });
    const stations = await nwsService.getStations({ wfo, x, y });
    const { id: stationId } = stations[0];
    const observations = await nwsService.getStationObservations({
      stationId,
      limit: 1, // Only get the most recent observation
    });
    const alerts = await nwsService.getActiveAlerts({
      point: `${location.latitude},${location.longitude}`,
    });
    return {
      location,
      city,
      state,
      forecast,
      hourlyForecast,
      stationId,
      observations,
      alerts,
    };
  } catch (e) {
    return Promise.reject(e);
  }
}

export default function DashboardPage() {
  const classes = useStyles();
  const history = useHistory();
  const { speedUnit, temperatureUnit } = useContext(SettingsContext);
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
    observations,
    stationId,
    alerts,
  } = forecastState;

  const currentWeather = observations?.[0] ?? null;

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
  useSerializeValue("cachedForecast", forecastState);

  const transformTemperature = useCallback(
    (temperature: Temperature): Temperature =>
      TemperatureUtils.round(
        TemperatureUtils.convert(temperature, temperatureUnit)
      ),
    [temperatureUnit]
  );

  const transformSpeed = (speed: Speed): Speed =>
    SpeedUtils.round(SpeedUtils.convert(speed, speedUnit));

  const transformForecast = useCallback(
    (forecast: Forecast): Forecast => {
      return {
        ...forecast,
        periods: forecast.periods.map(({ temperature, ...rest }) => ({
          temperature: transformTemperature(temperature),
          ...rest,
        })),
      };
    },
    [transformTemperature]
  );

  const transformedForecast = useMemo(
    () => (forecast !== null ? transformForecast(forecast) : null),
    [forecast, transformForecast]
  );

  const transformedHourlyForecast = useMemo(
    () => (hourlyForecast !== null ? transformForecast(hourlyForecast) : null),
    [hourlyForecast, transformForecast]
  );

  const currentDate = new Date();
  const endDate = new Date(currentDate);
  endDate.setDate(endDate.getDate() + 1);
  endDate.setHours(0, 0, 0, 0);
  const currentHourlyPeriods = transformedHourlyForecast?.periods
    .filter(
      ({ endTime, startTime }) =>
        new Date(endTime) > currentDate && new Date(startTime) < endDate
    )
    .map(({ temperature, ...rest }) => ({
      temperature: transformTemperature(temperature),
      ...rest,
    }));

  const updateLocation = (latitude: number, longitude: number) => {
    forecastStateDispatch({
      type: "updateForecast",
      payload: {
        location: { latitude, longitude },
      },
    });
  };

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const [activeTab, setActiveTab] = useState("hourly");

  const activeAlerts = (alerts ?? []).filter(
    ({ expires }) => expires > currentDate
  );

  return (
    <div className={classes.root}>
      <TabContext value={activeTab}>
        <AppBar
          location={
            city || state
              ? `${city ?? "Unknown"}, ${state ?? "Unknown"}`
              : undefined
          }
          onShowMenu={(e) => setMenuAnchor(e.currentTarget)}
          onLocationChange={updateLocation}
        />
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
          onSettingsClicked={() => {
            setMenuAnchor(null);
            history.push(routes.SETTINGS);
          }}
        />
        {loading && <LinearProgress color="secondary" />}
        <div className={classes.body}>
          {activeTab !== "alerts" && activeAlerts.length > 0 && (
            <Alert severity="error">
              <Link
                href="#"
                color="inherit"
                onClick={() => setActiveTab("alerts")}
              >
                Active alerts
              </Link>
            </Alert>
          )}
          <main className={classes.main}>
            <TabPanel value="hourly">
              {currentWeather && currentHourlyPeriods?.length && (
                <HourlyForecastPage
                  className={classes.hourlyForecastPage}
                  updateTime={new Date(currentWeather.timestamp)}
                  station={stationId ?? ""}
                  currentWeather={{
                    icon: currentWeather.icon,
                    shortForecast: currentWeather.description,
                    temperature: transformTemperature({
                      value: currentWeather.temperature?.value ?? 0,
                      unit: TemperatureUnit.Celsius,
                    }),
                    windSpeed:
                      currentWeather?.windSpeed !== undefined
                        ? transformSpeed({
                            value: currentWeather.windSpeed.value,
                            unit: SpeedUnit.KilometersPerHour,
                          })
                        : undefined,
                    relativeHumidity: currentWeather.relativeHumidity,
                  }}
                  hourlyForecast={currentHourlyPeriods}
                />
              )}
            </TabPanel>
            <TabPanel value="daily">
              <DailyForecastPage
                forecast={transformedForecast?.periods ?? []}
              />
            </TabPanel>
            <TabPanel value="alerts">
              <AlertsPage alerts={activeAlerts} />
            </TabPanel>
          </main>
        </div>
        <BottomNavigation
          value={activeTab}
          onChange={(e, value) => setActiveTab(value)}
          showLabels
          className={classes.bottomNavigation}
        >
          <BottomNavigationAction
            icon={<ScheduleIcon />}
            label="Hourly"
            value="hourly"
          />
          <BottomNavigationAction
            icon={<CalendarTodayIcon />}
            label="Daily"
            value="daily"
          />
          <BottomNavigationAction
            icon={<WarningIcon />}
            label="Alerts"
            value="alerts"
          />
        </BottomNavigation>
      </TabContext>
    </div>
  );
}
