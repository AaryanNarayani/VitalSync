function StepsCard({data} : any) {

    const steps = '10,000';

  return (
    <div className='h-[140px] w-[140px] flex flex-col items-center justify-center rounded-full bg-white p-2 gap-1'>
        <div className='flex items-center'>
            <img src="/icons/Step.svg" alt="" className='scale-[0.9]'/>
            <h1 className='text-[16px]'>Steps</h1>
        </div>
        <h1 className='text-[25px]'>{data}</h1>
        <h1 className="text-[13px] ">Today</h1>
    </div>
  )
}

export default StepsCard