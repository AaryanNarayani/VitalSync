import {ArrowLeft , Plus} from 'lucide-react'
import {useState} from 'react'

const Onboard2 = () => {

   const [code, setCode] = useState<string>('')
  return (
    <div className="bg-[--primary-background] w-[100vw] h-[100vh] flex items-center justify-center">


      <div className="bg-[--secondary-background] h-[330px] w-[450px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg ">


        <div className="w-[90%]   mx-auto flex flex-col  mt-[40px] ">
          <div className="flex  gap-2 justify-center items-center ">

            <div

              className="bg-[--secondary] h-[60px] w-[60px] rounded-[100%]  rounded-br-none  flex items-center justify-center hover:cursor-pointer hover:bg-purple-[--ternary]">
              <ArrowLeft size={30} className="hover:rotate-[35deg] transition-all delay-100" />
            </div>
            <div>

              <h1 className="text-[40px] mx-auto tracking-normal ">Sync</h1>
            </div>

          </div>
          <div className="w-[100%] flex justify-center mt-4">

            <p className="text-[--graytext] text-sm ">Help us know you more !</p>
          </div>
        </div>


        <div className="flex flex-col gap-5">

          <div className="w-[90%] mt-5 h-[50px] mx-auto flex items-center justify-center gap-5">
           <h1 className=''>Add Device</h1>
           <button className='bg-[--secondary] p-3 rounded-full'><Plus/></button>
          </div>

          <div className='flex justify-end w-[95%] mt-4'>
            <button className=" py-2 w-[30%] rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90" >Skip</button>
          </div>
         



        </div>


      </div>
    </div>
  )
}

export default Onboard2
