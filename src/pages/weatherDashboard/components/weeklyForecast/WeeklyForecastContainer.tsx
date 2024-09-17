import Divider from '../../../../components/Divider';
import weeklyForecastJSON from '../../data/WeeklyForecastDummyJson.json';
import ForecastContainerCard from './WeeklyForecastContainerCard';

function ForecastContainer() {
  return (
    <div className='h-full'>
      <h2>7-Day Forecast</h2>
      <ul className='h-full flex flex-col'>
        {weeklyForecastJSON.weeklyForecast.map((item, index) => {
          return (
            <li key={item.id} className='flex flex-col flex-grow justify-around'>
              <ForecastContainerCard condition={item.condition} day={item.day} icon={item.icon} minTemp={item.temperature.min} maxTemp={item.temperature.max} />
              {index < weeklyForecastJSON.weeklyForecast.length - 1 && <Divider width={200} height={2} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ForecastContainer;
