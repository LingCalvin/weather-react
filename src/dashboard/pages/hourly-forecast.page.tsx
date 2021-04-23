import { Period } from "../../nws/interfaces/forecast";
import HourlyForecastGridList from "../components/hourly-forecast-grid-list";
import WeatherCard, { WeatherCardProps } from "../components/weather-card";

interface HourlyForecastPageProps {
  currentWeather: Omit<WeatherCardProps, "updateTime" | "station">;
  hourlyForecast: Period[];
  updateTime: Date;
  station: string;
  className?: string;
}

export default function HourlyForecastPage({
  currentWeather,
  hourlyForecast,
  updateTime,
  station,
  className,
}: HourlyForecastPageProps) {
  return (
    <div className={className}>
      <WeatherCard
        icon={currentWeather.icon}
        shortForecast={currentWeather.shortForecast}
        temperature={currentWeather.temperature}
        windSpeed={currentWeather.windSpeed}
        relativeHumidity={currentWeather.relativeHumidity}
        updateTime={updateTime}
        station={station}
      />
      <HourlyForecastGridList periods={hourlyForecast} />
    </div>
  );
}
