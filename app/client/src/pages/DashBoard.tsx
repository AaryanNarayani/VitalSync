
import CaloriesCard from "../components/cards/(essentials)/CaloriesCard";
import StepsCard from "../components/cards/(essentials)/StepsCard";
import O2LevelCard from "../components/cards/(essentials)/O2LevelCard";
import HydrationCard from "../components/cards/(essentials)/HydrationCard";
import WeightCard from "../components/cards/(vitalstats)/WeightCard";
import HeightCard from "../components/cards/(vitalstats)/HeightCard";
import BloodPressureCard from "../components/cards/(vitalstats)/BloodPressureCard";
import BMICard from "../components/cards/(vitalstats)/BMICard";
import SunnyCard from "../components/cards/(weather)/SunnyCard";
import AirQualityCard from "../components/cards/(weather)/AirQualityCard";
import UVcard from "../components/cards/(weather)/UVcard";
import AIsuggestionCard from "../components/cards/(others)/AIsuggestionCard";
import {
  Activity,
  Brain,
  ChartPie,
  CloudMoon,
  MoonStar,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slice/UserSlice";
import { RootState } from "../redux/store";

function DashBoard() {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const userState = useSelector((state : RootState) => state.userState)

useEffect(() => {
  setToken(localStorage.getItem("token") || "");
}, []);

useEffect(() => {
  const handleGetUserData = async () => {
    if (token) {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/user/getInfo`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setUser(response.data.user));

      } catch (e) {
        console.log(e);
      }
    }
  };

  handleGetUserData();
}, [token]);

console.log('this is from redux',userState);
  return (
    <div className="h-[100vh] w-[100vw] p-10 flex gap-5">
      <div className="grid grid-cols-[1fr_1fr_1fr_1.3fr] grid-rows-[0.6fr_3fr_2fr] gap-5">
        <h1 className="text-[45px] row-start-1 col-span-3">Dashboard</h1>

        <div className="bg-[--card-background] p-4 pt-1 rounded-xl row-start-2">
          <h1 className="text-[20px] w-full text-center p-3 flex gap-3 items-center justify-center">
            Vital Stats
            <Activity size={20} />
          </h1>
          <div className="flex flex-wrap justify-center gap-4  ">
            <WeightCard weight={userState.user?.details.weight}/>
            <HeightCard height={userState.user?.details.height}/>
            <BloodPressureCard bp={userState.user?.details.BP}/>
            <BMICard data={userState.user?.details.BMI}/>
          </div>
        </div>

        <div className="row-start-2 col-span-2 bg-[--card-background] p-4">
          <h1 className="w-full text-[20px] text-center flex gap-3 items-center justify-center">
            Analytics
            <ChartPie size={20} />
          </h1>
        </div>

        <div className="row-start-1 row-span-2 col-start-4 bg-[--card-background] p-4 rounded-xl flex flex-col gap-3">
          <h1 className="text-[25px] w-full text-center p-3 pt-1 flex gap-3 items-center justify-center ">
            Essentials
            <Star size={20} />
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex flex-wrap justify-between items-center w-[90%]">
               <CaloriesCard data={userState.user?.details.calorie}/>
               <HydrationCard data={userState.user?.details.hydration}/>
            </div>
            <StepsCard data={userState.user?.details.steps}/>
            <O2LevelCard data={userState.user?.details.spo2}/>
          </div>
        </div>

        <div className="bg-[--card-background] col-span-2 rounded-xl w-full text-center flex flex-col items-center p-4 pt-1 pl-6 relative">
          <h1 className="text-[20px] p-3 flex gap-3 items-center justify-center">
            AI Suggestion
            <Brain size={20} />
          </h1>
          <img
            src="/icons/Morph.svg"
            alt=""
            className="absolute scale-[0.06] top-[-250px] left-[-300px]"
          />
          <AIsuggestionCard />
        </div>

        <div className="bg-[--card-background] rounded-xl">
          <h1 className="text-[20px] w-full text-center p-3 flex gap-3 items-center justify-center">
            Sleep
            <MoonStar size={20} />
          </h1>
        </div>

        <div className="bg-[--card-background] rounded-xl flex flex-col gap-4 items-center p-2">
          <h1 className="text-[20px] w-full text-center p-1 flex gap-3 items-center justify-center">
            Weather
            <CloudMoon size={20} />
          </h1>
          <div className="flex gap-3">
            <SunnyCard data={userState.user?.details.weather}/>
            <div className="flex flex-col justify-between">
              <AirQualityCard data={userState.user?.details.AQI}/>
              <UVcard data={userState.user?.details.UvIndex}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
