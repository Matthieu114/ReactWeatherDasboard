import React from 'react';
import AirConditionsCard from './AirConditionsCard';

function AirConditionsContainer() {
  return (
    <div className='h-full w-full'>
      <div className='flex justify-between mb-6'>
        <h2>Air Conditions</h2>
        <input type='button' value='See More' className='bg-blue-500 px-3 rounded-full text-xs font-semibold' />
      </div>
      <div className='grid grid-cols-2 h-full'>
        <AirConditionsCard icon='🌡️' value='30°' text='Real Feel' />
        <AirConditionsCard icon='💨' value='0.2 km/h' text='Wind' />
        <AirConditionsCard icon='🌧️' value='0%' text='Chance of rain' />
        <AirConditionsCard icon='🟣' value='3' text='UV Index' />
      </div>
    </div>
  );
}

export default AirConditionsContainer;
