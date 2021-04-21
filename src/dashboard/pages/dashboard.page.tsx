import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  MoreVert as MoreVertIcon,
  MyLocation as MyLocationIcon,
  Schedule as ScheduleIcon,
  CalendarToday as CalendarTodayIcon,
} from "@material-ui/icons";
import { TabContext, TabPanel } from "@material-ui/lab";
import geolocationService from "../../common/services/geolocation.service";
import nwsService from "../../nws/services/nws.service";
import localStorageService from "../../common/services/localStorage.service";
import useNetworkStatus from "../../common/hooks/use-network-status";
import forecastReducer from "../reducers/forecast-reducer";
import ForecastState from "../interfaces/forecast-state";
import useSerializeValue from "../../common/hooks/use-serialize-value";
import Menu from "../components/menu";
import Coordinates from "../../common/interfaces/coordinates";
import useStyles from "./dashboard.page.styles";
import HourlyForecastPage from "./hourly-forecast.page";
import { SpeedUnit } from "../enums/speed-unit.enum";
import { useHistory } from "react-router";
import routes from "../../common/constants/routes.json";
import { TemperatureUnit } from "../enums/temperature-unit";
import * as TemperatureUtils from "../utils/temperature.utils";
import * as SpeedUtils from "../utils/speed.utils";
import { SettingsContext } from "../../settings/contexts/settings.context";
import Temperature from "../interfaces/temperature";
import Speed from "../interfaces/speed";
import DailyForecastPage from "./daily-forecast.page";

function initializeForecastState(): ForecastState {
  return (
    localStorageService.getItem("cachedForecast") ?? {
      location: null,
      city: null,
      state: null,
      forecast: null,
      hourlyForecast: null,
      stationId: null,
      observation: null,
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
  useSerializeValue("cachedForecast", forecastState);

  const transformTemperature = (temperature: Temperature): Temperature =>
    TemperatureUtils.round(
      TemperatureUtils.convert(temperature, temperatureUnit)
    );

  const transformSpeed = (speed: Speed): Speed =>
    SpeedUtils.round(SpeedUtils.convert(speed, speedUnit));

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

  const [activeTab, setActiveTab] = useState("hourly");

  return (
    <div className={classes.root}>
      <TabContext value={activeTab}>
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
          onSettingsClicked={() => {
            setMenuAnchor(null);
            history.push(routes.SETTINGS);
          }}
        />
        {loading && <LinearProgress color="secondary" />}
        <main className={classes.main}>
          <TabPanel value="hourly">
            {currentWeather && currentHourlyPeriods?.length && (
              <HourlyForecastPage
                className={classes.hourlyForecastPage}
                updateTime={new Date(currentWeather.timestamp)}
                station={stationId ?? ""}
                currentWeather={{
                  icon: currentWeather.icon,
                  shortForecast: currentWeather.textDescription,
                  temperature: transformTemperature({
                    value: currentWeather.temperature.value ?? 0,
                    unit: TemperatureUnit.Celsius,
                  }),
                  windSpeed:
                    currentWeather.windSpeed.value !== null
                      ? transformSpeed({
                          value: currentWeather.windSpeed.value,
                          unit: SpeedUnit.KilometersPerHour,
                        })
                      : undefined,
                  relativeHumidity:
                    currentWeather.relativeHumidity.value ?? undefined,
                }}
                hourlyForecast={currentHourlyPeriods}
              />
            )}
          </TabPanel>
          <TabPanel value="daily">
            <DailyForecastPage forecast={forecast?.properties.periods ?? []} />
          </TabPanel>
        </main>
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
        </BottomNavigation>
      </TabContext>
    </div>
  );
}
