# weather-react

A simple web app for viewing the current forecast built with React and
TypeScript. Data is retrieved from the
[National Weather Service](https://www.weather.gov/documentation/services-web-api).

## Features

- Current weather observation

- Hourly forecast

- Daily forecast

- Configurable units

## Known Issues

- After searching for and selecting a location, the app may display the city and
  state as some other place. This is because the app uses the
  [ArcGIS World Geocoding Service](https://developers.arcgis.com/rest/geocode/api-reference/overview-world-geocoding-service.htm)
  to provide suggestions and retrieve coordinates, but displays the city and
  state as specified by the data returned from the National Weather Service for
  those coordinates.

## Quick Start

### Development

```sh
npm install # Install dependencies
npm start # Start the app in development mode
```

### Production

```sh
npm install # Install dependencies
npm run build # Create a production build
```

## License

This project is [MIT licensed](LICENSE).
