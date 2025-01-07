import { ArrowLeft } from "lucide-react"
import { useState } from "react"


function Verify() {
  const [code, setCode] = useState<string>('')
  return (
    <div className="bg-[--primary-background] w-[100vw] h-[100vh] flex items-center justify-center">


      <div className="bg-[--secondary-background] h-[360px] w-[450px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg ">


        <div className="w-[90%]   mx-auto flex flex-col  mt-[40px] ">
          <div className="flex  gap-2 justify-center items-center ">

            <div

              className="bg-[--secondary] h-[60px] w-[60px] rounded-[100%]  rounded-br-none  flex items-center justify-center hover:cursor-pointer hover:bg-purple-[--ternary]">
              <ArrowLeft size={30} className="hover:rotate-[35deg] transition-all delay-100" />
            </div>
            <div>

              <h1 className="text-[40px] mx-auto tracking-normal ">Verify Email</h1>
            </div>

          </div>
          <div className="w-[100%] flex justify-center mt-4">

            <p className="text-[--graytext] text-sm ">Verification code is mailed to aaryan@gmail.com</p>
          </div>
        </div>


        <div className="flex flex-col gap-5">

          <div className="w-[90%] mt-5 h-[50px] mx-auto flex flex-col">
            <input type="text"
              className="outline-none py-2 w-[80%] mx-auto mt-2 rounded-xl px-3 text-lg border border-opacity-25" placeholder="Enter verification code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>


          <div className="w-[90%]   h-[10px] mx-auto flex flex-col">

            <button className=" py-2 w-[80%] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90" >Verify Email</button>


          </div>
          <div className="w-[90%] h-[20px] mx-auto mt-6 flex justify-center ">
            <p className="mt-2">Didn’t get the code ?
              <span className="text-blue-500 hover:cursor-pointer"> Resend Code </span>


            </p>
          </div>


        </div>


      </div>
    </div>
  )
}

export default Verify