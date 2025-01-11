import React from 'react'


function StepsCard() {

    const steps = '10,000';

  return (
    <div className='h-[120px] w-[120px] flex flex-col items-center justify-center rounded-full bg-white p-2 gap-1'>
        <div className='flex items-center'>
            <img src="/icons/Step.svg" alt="" className='scale-[0.8]'/>
            <h1 className='text-[14px]'>Steps</h1>
        </div>
        <h1 className='text-[22px]'>{steps}</h1>
        <h1 className="text-[13px] ">Today</h1>
    </div>
  )
}

export default StepsCard