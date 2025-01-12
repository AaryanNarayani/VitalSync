function StepsCard() {

    const steps = '10,000';

  return (
    <div className='h-[140px] w-[140px] flex flex-col items-center justify-center rounded-full bg-white p-2 gap-1'>
        <div className='flex items-center'>
            <img src="/icons/Step.svg" alt="" className='scale-[1]'/>
            <h1 className='text-[20px]'>Steps</h1>
        </div>
        <h1 className='text-[30px]'>{steps}</h1>
        <h1 className="text-[15px] ">Today</h1>
    </div>
  )
}

export default StepsCard