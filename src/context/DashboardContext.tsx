import React, { createContext, useState, useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';
import getGeolocation, { GeolocationDataType } from '../utils/geolocation';

const WeatherContext = createContext(null);

function WeatherDashboardProvider() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({
    latitude: 52.52,
    longitude: 13.41,
    timezone: 'GTM',
    error: null
  });

  //   async function fetchGeolocation() {
  //     try {
  //       const data: GeolocationDataType = await getGeolocation();
  //       setLocation({
  //         latitude: data.latitude,
  //         longitude: data.longitude,
  //         timezone: data.timezone,
  //         error: null
  //       });
  //     } catch (error) {
  //       setLocation((prev) => ({
  //         ...prev,
  //         error: error
  //       }));
  //     }
  //   }

  useEffect(() => {
    getGeolocation()
      .then((data: GeolocationDataType) => {
        setLocation({
          latitude: data.latitude,
          longitude: data.longitude,
          timezone: data.timezone,
          error: null
        });
      })
      .catch((error) => {
        setLocation((prev) => ({
          ...prev,
          error: error
        }));
      });

    // const params = {
    //   latitude: 52.52,
    //   longitude: 13.41,
    //   timezone: 'GMT'
    // };
    // const url = 'https://api.open-meteo.com/v1/forecast';
    // const responses = await fetchWeatherApi(url, params);
  }, []);

  return <WeatherContext.Provider value={weatherData}>DashboardContext</WeatherContext.Provider>;
}

export default WeatherDashboardProvider;
