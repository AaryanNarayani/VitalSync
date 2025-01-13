function WeatherCard({data} : any) {

  const temperature = data;

  return (
    <div className='h-[140px] w-[140px] bg-[#8CC2F2] rounded-xl relative overflow-hidden'>
      <img src="/icons/StarYellow.svg" alt="" className='absolute inset-0 z-0 h-[90px] w-[90px] top-[-30px] left-[80px] '/>
      <div className='z-10 flex flex-col items-center justify-center h-full relative'>
          <h1 className='text-[18px]'>Clear</h1>
          <p className='text-[30px] ml-3 '>{temperature}&#176;</p>
          <h1 className='text-[15px]'>Celcius</h1>
      </div>
    </div>
  )
}

export default WeatherCard