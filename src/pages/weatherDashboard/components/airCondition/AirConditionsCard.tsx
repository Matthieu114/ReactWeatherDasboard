import React from 'react';

interface AirConditionsCardsProps {
  icon: string;
  text: string;
  value: string;
}

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
