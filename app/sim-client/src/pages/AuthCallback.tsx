import { useEffect, useState } from "react";

function AuthCallback() {
  const [loading,setLoading] =  useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setLoading(true);
    const token = params.get("token");
    if (token) {
      console.log(token);
      localStorage.setItem("token", token);
      setLoading(false);
      window.location.href = "/home";
    }
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
