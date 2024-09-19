import React from 'react';
import { ForecastContainerCardProps } from '../../../../types/interfaces';

function ForecastContainerCard({ day, icon, condition, minTemp, maxTemp }: ForecastContainerCardProps) {
  return (
    <div className='flex items-center justify-between w-full'>
      <p>{day}</p>
      <div className='flex items-center gap-4'>
        <span className='text-4xl'>{icon}</span>
        <p>{condition}</p>
      </div>
      <p>
        <span>{maxTemp}</span> / <span>{minTemp}</span>
      </p>
    </div>
  );
}

export default ForecastContainerCard;
