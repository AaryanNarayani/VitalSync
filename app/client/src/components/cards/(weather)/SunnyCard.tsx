import React from 'react'

function WeatherCard() {

  const temperature = 28;

  return (
    <div className='h-[200px] w-[200px] bg-[--secondary-background] rounded-xl relative overflow-hidden'>
      <img src="/icons/StarYellow.svg" alt="" className='absolute inset-0 z-0 h-[130px] w-[130px] top-[-40px] left-[90px] '/>
      <div className='z-10 flex flex-col items-center justify-center h-full relative gap-1'>
          <h1 className='text-[20px]'>Clear</h1>
          <p className='text-[50px] ml-3 '>{temperature}&#176;</p>
          <h1 className='text-[18px]'>Celcius</h1>
      </div>
    </div>
  )
}

export default WeatherCard