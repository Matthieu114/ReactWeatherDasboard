import { DailyForecastCardProps } from '../../../../types/interfaces';

function DailyForecastCard({ time, icon, temp }: DailyForecastCardProps) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='mb-2'>{time}</p>
      <span className='mb-4 text-4xl'>{icon}</span>
      <p className='font-bold text-xl'>{temp}°</p>
    </div>
  );
}

export default DailyForecastCard;
