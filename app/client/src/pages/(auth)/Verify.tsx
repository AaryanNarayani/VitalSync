import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { BASE_URL } from "../../utils";
import axios from "axios";

function Verify() {
  const [code, setCode] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    setEmail(searchParams.get("email") || "");
    console.log(email)
  }, []);

  const resendCode = async () => {
    try{
      setIsLoading(true);
      const response = await axios.post(`${BASE_URL}/api/v1/auth/signup/email`,{email});
      toast.success(response.data.message);
    }
    catch(e : any){
      if(e.response.status === 400){
        toast.error('Invalid Email');
      }
      else{
        toast.error('Something went wrong');
      }
    }
    finally{
      setIsLoading(false);
    }
  }

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${BASE_URL}/api/v1/auth/signup/email/verify`, {
        email,
        code,
      });
      toast.success('Successfully Signed Up');
      localStorage.setItem("token", response.data.token);
      navigate("/home");

    } catch (e : any) {
      if (e.response.status === 400) {
        toast.error('Invalid Code');
      } else {
        console.log(e.message)
        toast.error("Something went wrong", e.message);
      }
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="bg-[--primary-background] w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="bg-[--secondary-background] h-[360px] w-[450px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg ">
        <div className="w-[90%]   mx-auto flex flex-col  mt-[40px] ">
          <div className="flex  gap-2 justify-center items-center ">
            <div className="bg-[--secondary] h-[60px] w-[60px] rounded-[100%]  rounded-br-none  flex items-center justify-center hover:cursor-pointer hover:bg-purple-[--ternary]">
              <ArrowLeft
                size={30}
                className="hover:rotate-[35deg] transition-all delay-100"
              />
            </div>
            <div>
              <h1 className="text-[40px] mx-auto tracking-normal ">
                Verify Email
              </h1>
            </div>
          </div>
          <div className="w-[100%] flex justify-center mt-4">
            <p className="text-[--graytext] text-sm ">
              {`Verification code is mailed to ${email}`}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="w-[90%] mt-5 h-[50px] mx-auto flex flex-col">
            <input
              type="text"
              className="outline-none py-2 w-[80%] mx-auto mt-2 rounded-xl px-3 text-lg border border-opacity-25"
              placeholder="Enter verification code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          <div className="w-[90%]   h-[10px] mx-auto flex flex-col">
            <button className=" py-2 w-[80%] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90" onClick={handleSubmit}>
              Verify Email
            </button>
          </div>
          <div className="w-[90%] h-[20px] mx-auto mt-6 flex justify-center ">
            <p className="mt-2">
              Didn’t get the code ?
              <span className={`${isLoading ? "text-blue-300" : "text-blue-600"} hover:cursor-pointer`} onClick={resendCode}>
                {" "}
                Resend Code{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
