import React from 'react'

function UVcard() {

    const UV = 100;
    const level = UV > 0 && UV <= 2 ? "Low": 
                  UV > 2 && UV <= 5? "Moderate" :
                  "High";
    const color = level === 'Low' ? '#D6FF64':
                  level === 'Moderate' ? '#F6AD55':               
                  '#E54335';

  return (
    <div className='w-[200px] h-[90px] bg-[#E54335] flex flex-col rounded-xl rounded-tl-none justify-center p-4'
    style={{backgroundColor : color}}>
    <h1>UV Index</h1>
    <div className='flex justify-between items-end'>
        <p className='text-[28px]'>{UV}</p>
        <h1 className='text-[18px]'>{level}</h1>
    </div>
</div>
  )
}

export default UVcard