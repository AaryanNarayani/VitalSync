function BloodPressureCard() {

  const BloodPressure = '120/80';

  return (
    <div className="h-[100px] w-[100px] bg-[--secondary] relative overflow-hidden rounded-xl">
    <div className="h-[110px] w-[110px] bg-white absolute top-[50px] left-[-60px] rounded-full" />
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-start p-4 pt-2 space-y-1">
      <h1 className="text-[13px]">Blood Pressure</h1>
      <p className="text-[20px]">{BloodPressure}</p>
    </div>
  </div>
  )
}

export default BloodPressureCard