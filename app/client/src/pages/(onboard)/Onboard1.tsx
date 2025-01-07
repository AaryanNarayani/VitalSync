import React from 'react'
import Button from '../../components/Button/Button'



const Onboard1 = () => {
    return (
        <div className="bg-[--primary-background] w-[100vw] h-[100vh] flex items-center justify-center">


            <div className="bg-[--secondary-background] h-[490px] w-[400px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg gap-5">
                    <div className="w-[90%] mt-5 h-[50px] mx-auto flex flex-col justify-center items-center ">
                        <h1 className='text-[33px]'>Hello There !!</h1>
                        <p className="text-[--graytext] text-sm ">Help us know you more !</p>
                    </div>

                    <div className="w-[75%] mt-5 h-[300px] mx-auto flex flex-col ">

                        <label htmlFor="">Name</label>
                        <input type="text"
                            className="outline-none py-2 w-[100%] mx-auto mt-2 rounded-xl px-3 text-lg border border-opacity-25" placeholder="Enter your name"
                        />
                        
                        <label htmlFor="">Age</label>
                        <input type="text"
                            className="outline-none py-2 w-[100%] mx-auto mt-2 rounded-xl px-3 text-lg border border-opacity-25" placeholder="Enter your age"
                        />
                        
                        <label htmlFor="">Height</label>
                        <input type="text"
                            className="outline-none py-2 w-[100%] mx-auto mt-2 rounded-xl px-3 text-lg border border-opacity-25" placeholder="Enter your height"
                        />
                        
                        <label htmlFor="">Weight</label>
                        <input type="text"
                            className="mb-3 outline-none py-2 w-[100%] mx-auto mt-2 rounded-xl px-3 text-lg border border-opacity-25" placeholder="Enter your Weight "
                        />

                        <Button  >Submit</Button>

                    </div>





            </div>
        </div>
    )
}

export default Onboard1
