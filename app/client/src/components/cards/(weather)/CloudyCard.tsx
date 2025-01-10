import React from 'react'

function CloudyCard() {

  const temperature = 18;

  return (
    <div className='h-[200px] w-[200px] bg-[#5D6872] rounded-xl relative overflow-hidden'>
    <img src="/icons/Cloud.svg" alt="" className='absolute inset-0 z-0 h-[150px] w-[150px] top-[-45px] left-[-35px]'/>
    <div className='z-10 flex flex-col items-center justify-center h-full relative gap-1 text-white'>
        <h1 className='text-[20px] text-black'>Cloudy</h1>
        <p className='text-[50px] ml-3 '>{temperature}&#176;</p>
        <h1 className='text-[18px]'>Celcius</h1>
    </div>
  </div>
  )
}

export default CloudyCard