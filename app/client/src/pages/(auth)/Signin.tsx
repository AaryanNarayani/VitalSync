import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


function Signin() {

  const [email,setEmail] = useState<string>("");
  const location = useLocation();  
  const [isSignedUp,setIsSignedUp] = useState<boolean>(false)

  const handleChange = (evt : React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(evt.target.value) 
  };

  const handleSumbit = () =>{
    console.log(email)
  }

  useEffect(()=>{
    setIsSignedUp(location.pathname === '/signin');
  },[location.pathname])


  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[60vh] w-[30vw] bg-[--secondary-background] border flex flex-col items-center p-12 rounded-lg">
        <h1 className="text-[40px]">{isSignedUp? "Sign In" : "Sign Up"}</h1>
        <p className="text-[12px] text-[--light-text]">{isSignedUp ? "Welcome !" : "Wellness starts with tracking !"}</p>
        <button className="h-[40px] w-[80%] bg-gradient-to-r from-[--secondary] to-[--primary] border flex items-center justify-center gap-3 rounded-lg mt-6 mb-5 p-5">
          <img src="googleIcon.png" alt="" className="h-[22px] w-[22px]" />
          Sign Up with Google
        </button>
        <div className="relative w-[85%] h-[15px] mt-3" >
          <hr className="z-0"/>
          <p className="absolute text-[12px] bottom-[50%] left-[50%] translate-x-[-50%] h-[15px] w-[40px] bg-[--secondary-background] text-center z-10">OR</p>
        </div>
        <input type="email"
               className="h-[35px] w-[80%] border mt-3 p-5 rounded-lg outline-none" 
               placeholder="Enter your email" 
               value={email}
               onChange={handleChange}
               name="email" />
        <button className="bg-black h-[35px] w-[80%] mt-5 p-5 text-white flex items-center justify-center rounded-lg"
                onClick={handleSumbit}>Continue with email</button>
        <p className="text-[12px] mt-3">{isSignedUp ? "Not a User? " : "Already a User? "}<span className="text-[--primary]">
          {isSignedUp ? <Link to={'/signup'}>Sign Up</Link> : <Link to={'/signin'}>Sign In</Link>}
          </span></p>       
      </div>
    </div>
  )
}

export default Signin