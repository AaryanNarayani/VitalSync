import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TopBar() {
  const [token, setToken] = useState("");
  const naviagte  = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  const handleLogin = () => {
    if(token!==''){
      setToken('');
      localStorage.removeItem("token");
    }
    else{
      naviagte('/signup');
    }
  };
  return (

    <div className="flex justify-between px-4 py-2">
      <Link to='/'><h1>VitalSync</h1></Link>
      <button className="bg-[#8CC2F2] rounded px-3 py-1 hover:brightness-90" onClick={handleLogin}>
        {token ==='' ? `Login` : `Logout`}
      </button>
    </div>
  );
}

export default TopBar;
