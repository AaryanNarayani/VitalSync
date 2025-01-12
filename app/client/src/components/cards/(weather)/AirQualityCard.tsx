function AirQualityCard() {

    const AQI = 1;
    const level = AQI > 0 && AQI <= 50 ? "Good": 
                  AQI > 50 && AQI <= 100? "Moderate" :
                  "Unhealty";
    const color = level === 'Good' ? '#D6FF64':
                  level === 'Moderate' ? '#F6AD55':               
                  '#E54335';

  return (
    <div className={`w-[200px] h-[50px]  flex flex-col rounded-xl rounded-bl-none justify-center p-4`}
         style={{backgroundColor : color}}>
            <h1 className='text-[13px]'>Air Quality</h1>
            <div className='flex justify-between items-end'>
                <p className='text-[22px]'>{AQI}</p>
                <h1 className='text-[18px]'>{level}</h1>
            </div>
    </div>
  )
}

export default AirQualityCard