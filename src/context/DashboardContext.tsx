import { createContext, useState, useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';
import getGeolocation, { GeolocationDataType } from '../utils/geolocation';

export const WeatherContext = createContext(null);
const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';

function WeatherDashboardProvider() {
  const [weatherData, setWeatherData] = useState(null);
  // const [location, setLocation] = useState();

  async function fetchWeatherData(location: object) {
    const params = {
      ...location,
      current: ['temperature_2m', 'precipitation', 'weather_code']
    };
    try {
      const responses = await fetchWeatherApi(WEATHER_API_URL, params);
      const response = responses[0];
      console.log(responses);
      const json = { data: response };
      const jsonString = JSON.stringify(json);
      console.log(jsonString);
      //   setWeatherData(response);
    } catch (error) {
      console.error('couldnt fetch api data ' + error);
    }
  }

  useEffect(() => {
    getGeolocation()
      .then((data: GeolocationDataType) => {
        const location = {
          latitude: data.latitude,
          longitude: data.longitude,
          timezone: data.timezone
        };

        fetchWeatherData(location);
      })
      .catch((error) => {
        const location = {
          latitude: 52.52,
          longitude: 13.41,
          timezone: 'GMT'
        };

        fetchWeatherData(location);
      });
  }, []);

  return <WeatherContext.Provider value={weatherData}>{}</WeatherContext.Provider>;
}

export default WeatherDashboardProvider;
