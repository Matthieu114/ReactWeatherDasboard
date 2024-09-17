import React from 'react';
import DailyForecastCard from './DailyForecastCard';
import Divider from '../../../../components/Divider';

const todayForecastData = {
  city: 'Madrid',
  date: '2024-09-14',
  temperature: {
    current: 31,
    min: 25,
    max: 34
  },
  forecast: [
    { id: 1, time: '6:00 AM', condition: 'Cloudy', temperature: 25, icon: '🌥️' },
    { id: 2, time: '9:00 AM', condition: 'Partly Cloudy', temperature: 28, icon: '⛅' },
    { id: 3, time: '12:00 PM', condition: 'Sunny', temperature: 33, icon: '☀️' },
    { id: 4, time: '3:00 PM', condition: 'Sunny', temperature: 34, icon: '☀️' },
    { id: 5, time: '6:00 PM', condition: 'Sunny', temperature: 32, icon: '☀️' },
    { id: 6, time: '9:00 PM', condition: 'Partly Cloudy', temperature: 30, icon: '🌤️' }
  ],
  airConditions: {
    realFeel: 30,
    windSpeed: '0.2 km/h',
    uvIndex: 3,
    chanceOfRain: '0%'
  }
};

function TodaysForecastContainer() {
  return (
    <div className='h-full'>
      <h2 className='mb-6'>Today's forecast</h2>
      <ul className='flex w-full'>
        {todayForecastData.forecast.map((forecastItem, index) => {
          return (
            <li className='flex items-center flex-grow justify-around' key={forecastItem.id}>
              <DailyForecastCard time={forecastItem.time} icon={forecastItem.icon} temp={forecastItem.temperature} />
              {index < todayForecastData.forecast.length - 1 && <Divider height={125} width={2} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodaysForecastContainer;
