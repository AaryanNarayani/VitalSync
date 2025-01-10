import React from 'react'

function O2LevelCard() {

    const oxygenLevel = 96;
    const avgOxygenLevel = 96;


  return (
    <div className='h-[100px] w-[150px] bg-[--ternary-background] rounded-tr-xl rounded-bl-xl rounded-br-xl relative overflow-hidden p-3 pl-4 justify-center items-center flex flex-col'>
        <div className="absolute h-[80px] w-[80px] bg-white rounded-full left-[-20px] top-[-20px] z-0"></div>
        <div className='flex w-full text-[12px]'><h1 className=' z-10 text-[14px]'>O<sub>2</sub>&nbsp;&nbsp;SpO2</h1></div>
        <p  className=' z-10 text-[24px]'>{oxygenLevel}</p>
        <div className='flex w-full justify-between'>
        <h1 className="text-[13px]">Today</h1>
        <h1 className="text-[12px]">Avg <span>{avgOxygenLevel}</span></h1>
        </div>

        
    </div>
  )
}

export default O2LevelCard