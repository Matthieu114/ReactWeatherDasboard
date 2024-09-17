import React from 'react';

function CityInfo() {
  return (
    <div className='h-full flex justify-between items-center p-4'>
      <div className='flex flex-col h-full justify-between'>
        <div>
          <h1>Madrid</h1>
          <p>Chance of rain: 0%</p>
        </div>
        <p className=''>31°</p>
      </div>
      <i className=''>Soleil Icon</i>
    </div>
  );
}

export default CityInfo;
