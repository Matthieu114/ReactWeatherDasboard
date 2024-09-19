import { GeolocationDataType } from '../types/interfaces';

export default {
  weatherCodeToIcon: {
    // Clear sky
    0: '☀️',

    // Mainly clear, partly cloudy, and overcast
    1: '🌤️',
    2: '⛅',
    3: '☁️',

    // Fog and depositing rime fog
    45: '🌫️',
    48: '🌫️',

    // Drizzle: Light, moderate, and dense intensity
    51: '🌧️', // Light drizzle
    53: '🌧️', // Moderate drizzle
    55: '🌧️', // Dense drizzle

    // Freezing Drizzle: Light and dense intensity
    56: '❄️🌧️', // Light freezing drizzle
    57: '❄️🌧️', // Dense freezing drizzle

    // Rain: Slight, moderate, and heavy intensity
    61: '🌦️', // Slight rain
    63: '🌧️', // Moderate rain
    65: '🌧️🌧️', // Heavy rain

    // Freezing Rain: Light and heavy intensity
    66: '🌧️❄️', // Light freezing rain
    67: '🌧️❄️', // Heavy freezing rain

    // Snow fall: Slight, moderate, and heavy intensity
    71: '🌨️', // Slight snow
    73: '🌨️', // Moderate snow
    75: '🌨️🌨️', // Heavy snow

    // Snow grains
    77: '🌨️❄️', // Snow grains

    // Rain showers: Slight, moderate, and violent
    80: '🌧️', // Slight rain showers
    81: '🌧️🌧️', // Moderate rain showers
    82: '🌧️🌧️🌧️', // Violent rain showers

    // Snow showers slight and heavy
    85: '❄️🌨️', // Slight snow showers
    86: '❄️🌨️🌨️', // Heavy snow showers

    // Thunderstorm: Slight or moderate
    95: '⛈️', // Thunderstorm

    // Thunderstorm with slight and heavy hail
    96: '⛈️🌨️', // Thunderstorm with slight hail
    99: '⛈️🌨️🌨️' // Thunderstorm with heavy hail
  },

  getWeatherIcon(weatherCode: number) {
    return this.weatherCodeToIcon[weatherCode] || 'no icon';
  },

  // Helper function to form time ranges
  getWeatherTimeRanges(start: number, stop: number, step: number) {
    return Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
  },
  getGeolocation(): Promise<GeolocationDataType> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            resolve({
              latitude,
              longitude,
              timezone
            });
          },
          (error) => {
            reject(`Error getting location: ${error.message}`);
          }
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  },

  getFormattedWeatherDataResponse(response) {
    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const current = response.current()!;
    const hourly = response.hourly()!;
    const daily = response.daily()!;

    const currentWeatherData = {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      apparentTemperature: current.variables(1)!.value(),
      isDay: current.variables(2)!.value(),
      precipitation: current.variables(3)!.value(),
      rain: current.variables(4)!.value(),
      weatherCode: current.variables(5)!.value(),
      weatherIcon: this.getWeatherIcon(current.variables(5)!.value())
    };

    const hourlyWeatherData = {
      time: this.getWeatherTimeRanges(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      apparentTemperature: hourly.variables(1)!.valuesArray()!,
      precipitationProbability: hourly.variables(2)!.valuesArray()!,
      precipitation: hourly.variables(3)!.valuesArray()!,
      rain: hourly.variables(4)!.valuesArray()!,
      weatherCode: hourly.variables(5)!.valuesArray()!
    };

    const weeklyWeatherData = {
      time: this.getWeatherTimeRanges(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!,
      apparentTemperatureMax: daily.variables(3)!.valuesArray()!,
      apparentTemperatureMin: daily.variables(4)!.valuesArray()!,
      uvIndexMax: daily.variables(5)!.valuesArray()!,
      precipitationSum: daily.variables(6)!.valuesArray()!,
      rainSum: daily.variables(7)!.valuesArray()!,
      precipitationProbabilityMax: daily.variables(8)!.valuesArray()!,
      windSpeed10mMax: daily.variables(9)!.valuesArray()!,
      windGusts10mMax: daily.variables(10)!.valuesArray()!
    };

    const responseWeatherData = { ...{ latitude, longitude, timezone, timezoneAbbreviation }, current: currentWeatherData, hourly: hourlyWeatherData, weekly: weeklyWeatherData };

    console.log(responseWeatherData);

    return responseWeatherData;
  }
};
