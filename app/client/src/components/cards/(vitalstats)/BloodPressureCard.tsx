import React from 'react'

function BloodPressureCard() {

  const BloodPressure = '120/80';

  return (
    <div className="h-[120px] w-[120px] bg-[--secondary] relative overflow-hidden rounded-xl">
    <div className="h-[110px] w-[110px] bg-white absolute top-[55px] left-[-45px] rounded-full" />
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-start p-4 pt-5 space-y-1">
      <h1 className="text-[12px]">Blood Pressure</h1>
      <p className="text-[25px]">{BloodPressure}</p>
    </div>
  </div>
  )
}

export default BloodPressureCard