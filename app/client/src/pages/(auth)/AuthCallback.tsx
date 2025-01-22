import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils";

function AuthCallback() {
  const [loading,setLoading] =  useState(false);
  useEffect(() => {
    async function getOAuthToken(){;
    const params = new URLSearchParams(window.location.search);
    setLoading(true);
    const token = params.get("token");
    if (token) {
      console.log(token);
      localStorage.setItem("token", token);
      
      const response = await axios.post(`${BASE_URL}/api/v1/auth/validate`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const isOnboarded = response.data.isOnboarded;
      if(!isOnboarded){
        setLoading(false);
        window.location.href = "/onboard/1";
        return
      }
      setLoading(false);
      window.location.href = "/home";
    }
    }
    getOAuthToken();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <>
  <div>
    OAuth Callback : Setting up Oauth tokens
  </div>
  </>;
}
export default AuthCallback;
