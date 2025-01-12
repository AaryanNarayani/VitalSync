function O2LevelCard() {

    const oxygenLevel = 96;
    const avgOxygenLevel = 96;


  return (
    <div className='h-[110px] w-[180px] bg-[--ternary-background] rounded-tr-xl rounded-bl-xl rounded-br-xl relative overflow-hidden p-3 pl-4 justify-center items-center flex flex-col'>
        <div className="absolute h-[100px] w-[100px] bg-white rounded-full left-[-40px] top-[-40px] z-0"></div>
        <div className='flex w-full text-[18px]'><h1 className=' z-10 text-[18px]'>O<sub>2</sub>&nbsp;&nbsp;SpO2</h1></div>
        <p  className=' z-10 text-[25px]'>{oxygenLevel}</p>
        <div className='flex w-full justify-between'>
        <h1 className="text-[18px]">Today</h1>
        <h1 className="text-[15px]">Avg <span className='text-[15px]'>{avgOxygenLevel}</span></h1>
        </div>

        
    </div>
  )
}

export default O2LevelCard