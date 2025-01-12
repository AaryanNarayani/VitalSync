import axios from "axios";
import { useEffect } from "react"
import { BASE_URL } from "../utils";

function Home(){
  useEffect(() => {
    async function getDetails(){
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/api/v1/user/getInfo`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data);
    }
    getDetails();
  }, []);
  return(
    <>
    <div>
      Hello User
    </div>
    </>
  )
}
export default Home