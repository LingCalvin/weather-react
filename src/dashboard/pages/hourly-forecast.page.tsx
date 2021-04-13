import { Period } from "../../nws/interfaces/forecast-response";
import HourlyForecastGridList from "../components/hourly-forecast-grid-list";
import WeatherCard, { WeatherCardProps } from "../components/weather-card";

interface HourlyForecastPageProps {
  currentWeather: Omit<WeatherCardProps, "updateTime" | "station">;
  hourlyForecast: Period[];
  updateTime: Date;
  station: string;
}

export default function HourlyForecastPage({
  currentWeather,
  hourlyForecast,
  updateTime,
  station,
}: HourlyForecastPageProps) {
  return (
    <>
      <WeatherCard
        icon={currentWeather.icon}
        shortForecast={currentWeather.shortForecast}
        temperature={currentWeather.temperature}
        temperatureUnit={currentWeather.temperatureUnit}
        windSpeed={currentWeather.windSpeed}
        relativeHumidity={currentWeather.relativeHumidity}
        updateTime={updateTime}
        station={station}
      />
      <HourlyForecastGridList periods={hourlyForecast} />
    </>
  );
}
