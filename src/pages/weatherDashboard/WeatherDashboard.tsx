import Layout from '../../components/Layout';
import AirConditionsContainer from './components/airCondition/AirConditionsContainer';
import CityInfo from './components/CityInfo';
import TodaysForecastContainer from './components/dailyForecast/DailyForecastContainer';
import WeeklyForecastContainer from './components/weeklyForecast/WeeklyForecastContainer';

const WeatherDashboard = () => {
  return (
    <Layout>
      <div className='h-full grid grid-cols-3 grid-rows-[1fr_1fr_1fr] gap-4'>
        <div className='col-span-2 py-4 px-6 rounded-xl shadow-md'>
          <CityInfo />
        </div>
        <div className='row-span-3  bg-gray-700 py-4 px-6 rounded-xl shadow-md'>
          <WeeklyForecastContainer />
        </div>
        <div className='col-span-2 bg-gray-700 py-4 px-6 rounded-xl shadow-md'>
          <TodaysForecastContainer />
        </div>
        <div className='col-span-2 bg-gray-700 py-4 px-6 rounded-xl shadow-md'>
          <AirConditionsContainer />
        </div>
      </div>
    </Layout>
  );
};

export default WeatherDashboard;
