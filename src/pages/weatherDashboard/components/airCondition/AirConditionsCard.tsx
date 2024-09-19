import React from 'react';
import { AirConditionsCardsProps } from '../../../../types/interfaces';

function AirConditionsCard({ icon, text, value }: AirConditionsCardsProps) {
  return (
    <div className='flex'>
      <span className='mr-3'>{icon}</span>
      <div>
        <p>{text}</p>
        <p className='text-2xl font-bold'>{value}</p>
      </div>
    </div>
  );
}

export default AirConditionsCard;
