import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function TopBar() {
  const [token, setToken] = useState("");
  const naviagte = useNavigate();
  const location = useLocation();
  const [isLanding, setIsLanding] = useState<Boolean>(false)

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
    if (location.pathname === '/signup' || location.pathname === '/signin') {
      setIsLanding(true)
    }
    else
      setIsLanding(false)
  }, [location.pathname]);

  const handleLogin = () => {
    console.log('I was clicked');
    
    if (token !== '') {
      ///logout 
      setToken('');
      localStorage.removeItem("token");
      naviagte('/');
    }
    else {
      naviagte('/signup');
    }
  };
  return (
    <>
      {!isLanding && <div className="flex justify-between px-4 py-2">
        <Link to='/'><h1>VitalSync</h1></Link>
        <button className="bg-[#8CC2F2] rounded px-3 py-1 hover:brightness-90 cursor-pointer z-60" 
        onClick={handleLogin}>
          {token === '' ? `Login` : `Logout`}
        </button>
      </div>}
    </>

  );
}

export default TopBar;
