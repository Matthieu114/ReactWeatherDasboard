import { createContext, useState, useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';
import { GeolocationDataType } from '../types/interfaces';
import weatherHelpers from '../utils/weatherHelpers';

export const WeatherContext = createContext(null);
const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';

function WeatherDashboardProvider() {
  const [weatherData, setWeatherData] = useState<any | null>(null);
  // const [location, setLocation] = useState();

  async function fetchWeatherData(location: object) {
    const params = {
      ...location,
      current: ['temperature_2m', 'apparent_temperature', 'is_day', 'precipitation', 'rain', 'weather_code'],
      hourly: ['temperature_2m', 'apparent_temperature', 'precipitation_probability', 'precipitation', 'rain', 'weather_code'],
      daily: [
        'weather_code',
        'temperature_2m_max',
        'temperature_2m_min',
        'apparent_temperature_max',
        'apparent_temperature_min',
        'uv_index_max',
        'precipitation_sum',
        'rain_sum',
        'precipitation_probability_max',
        'wind_speed_10m_max',
        'wind_gusts_10m_max'
      ]
    };
    try {
      const responses = await fetchWeatherApi(WEATHER_API_URL, params);
      const response = responses[0];

      const responseWeatherData = weatherHelpers.getFormattedWeatherDataResponse(response);

      setWeatherData(responseWeatherData);
    } catch (error) {
      console.error('couldnt fetch api data ' + error);
    }
  }

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  useEffect(() => {
    weatherHelpers
      .getGeolocation()
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
