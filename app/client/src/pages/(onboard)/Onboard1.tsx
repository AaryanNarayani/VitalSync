import React from 'react'
import Button from '../../components/Button/Button'



const Onboard1 = () => {
    return (
        <div className="bg-[--primary-background] w-[100vw] h-[100vh] flex items-center justify-center">

            <div className="bg-[--secondary-background] h-[500px] w-[400px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg gap-5 px-8 py-4 ">


                <div className="w-[90%] mt-5 h-[50px] mx-auto flex flex-col justify-center items-center ">
                    <h1 className='text-[30px]'>Hello There !!</h1>
                    <p className="text-[--graytext] text-xs ">Help us know you more !</p>
                </div>

                <div className="w-[80%] mt-2 h-[300px] mx-auto flex flex-col  items-start">

                    <label htmlFor="" className='text-[15px] font-light mt-1'>Name</label>
                    <input type="text"
                        className="outline-none py-[8px] w-[100%] mx-auto mt-1 rounded-xl px-3 text-md border border-opacity-25 " placeholder="Enter your name"
                    />

                    <label htmlFor="" className='text-[15px] font-light mt-1'>Age</label>
                    <input type="text"
                        className="outline-none py-[8px] w-[100%] mx-auto mt-1 rounded-xl px-3 text-md border border-opacity-25 " placeholder="Enter your age"
                    />

                    <label htmlFor="" className='text-[15px] font-light mt-1'>Height</label>
                    <input type="text"
                        className="outline-none py-[8px] w-[100%] mx-auto mt-1 rounded-xl px-3 text-md border border-opacity-25 " placeholder="Enter your height"
                    />

                    <label htmlFor="" className='text-[15px] font-light mt-1'>Weight</label>
                    <input type="text"
                        className="mb-3 outline-none py-[8px] w-[100%] mx-auto mt-1 rounded-xl px-3 text-md border border-opacity-25" placeholder="Enter your Weight "
                    />

                    <button className=" py-2 w-[100%] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90 text-[10px] font-normal " >Submit</button>

                </div>





            </div>
        </div>
    )
}

export default Onboard1
