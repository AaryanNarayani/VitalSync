import React from 'react'

function Advisor() {
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
        <div className='h-[80%] w-[80%] rounded-2xl border-[2px] overflow-hidden relative flex flex-col items-center justify-center text-[#999999]'>
            <img src="/icons/Morph.svg" alt="" className='h-[500px] w-[500px] absolute -top-44 left-1/2 -translate-x-1/2'/>
            <p className='mt-44 text-[18px]'>Hello there! ^_^ </p>
            <p className=' w-[70%] text-[16px] text-center'>I'm Vivi, your friendly health advisory assistant. I'm here to help you with health-related queries, provide useful tips, and guide you toward better wellness.</p>
            <button className='h-[60px] w-[200px] bg-black mt-16 rounded-xl font-[--bricolage] text-white text-[24px]'>
                Get started
            </button>
        </div>        
    </div>
  )
}

export default Advisor