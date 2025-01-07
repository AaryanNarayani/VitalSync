import React from 'react'



const Onboard1 = () => {
  return (
    <div className="bg-[--primary-background] w-[100vw] h-[100vh] flex items-center justify-center">


    <div className="bg-[--secondary-background] h-[360px] w-[450px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg ">



      <div className="flex flex-col gap-5">

        <div className="w-[90%] mt-5 h-[50px] mx-auto flex flex-col">
        <input type="text"
            className="outline-none py-2 w-[80%] mx-auto mt-2 rounded-xl px-3 text-lg border border-opacity-25" placeholder="Enter name"
          />
        </div>


       

      </div>


    </div>
  </div>
  )
}

export default Onboard1
