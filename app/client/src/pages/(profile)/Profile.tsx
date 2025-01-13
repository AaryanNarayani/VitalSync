import { CloudCog, MoveLeft, MoveRight, Pencil } from "lucide-react";
import CircularProgressBar from "../../components/ui/CircularProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { setUser } from "../../redux/slice/UserSlice";
import { BASE_URL } from "../../utils";
import ManageDeviceCard from "../../components/cards/(profile)/ManageDeviceCard";
import Data from "../../lib/DeviceList";

function Profile() {
  type Device = {
    createdAt: string;
    id: number;
    isApple: boolean;
    isAppleApp: boolean;
    isBoat: boolean;
    isBoatRing: boolean;
    isFitbit: boolean;
    isFitbitApp: boolean;
    isOuraRing: boolean;
    isSleepApp: boolean;
    updatedAt: string;
    userId: number;
  };

  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.userState);

  const stepPercentage = ((userState?.user?.details.steps || 0) / 10000) * 100;
  const sleepPercentage = ((userState?.user?.details.sleepCycle || 0) / 8) * 100;
  const hydrationPercentage = ((userState?.user?.details.hydration || 0) / 2000) * 100;

  const userDevices = userState?.user?.devices;

  // Extract active device keys
  const activeDeviceKeys: string[] = userDevices?.flatMap((device) =>
    Object.keys(device).filter((key) => device[key as keyof Device] === true)
  ) || [];

  // Filter the device data based on active keys
  const activeDevices = Data.filter((device) =>
    activeDeviceKeys.includes(device.name)
  );

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

  // Ref for the scrollable div
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle smooth scrolling
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust the scroll amount as needed
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="h-[calc(100vh-48px)] w-[full]">
      <div className="h-[40vh] w-full p-6 mt-10 pl-10 flex gap-16">
        <div className="h-full flex items-center relative">
          <img
            src={userState?.user?.avatar}
            alt="hahah"
            className="h-[220px] w-[220px] rounded-full border-[5px] border-[--primary]"
          />
          <div className="p-4 bg-[--primary] rounded-full absolute border-[5px] border-white top-40 left-40">
            <Pencil />
          </div>
        </div>
        <div className="flex flex-col items-center p-16 pt-0">
          <h1 className="text-[55px] font-normal mt-4">{userState?.user?.name}</h1>
          <div className="flex mt-4 gap-8 w-full justify-evenly">
            <div className="flex flex-col items-center">
              <h1 className="text-[25px]">BMI</h1>
              <p className="text-[20px]">{userState?.user?.details.BMI}</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-[25px]">Age</h1>
              <p className="text-[20px]">{userState?.user?.details.age}</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-[25px]">Weight</h1>
              <p className="text-[20px]">{userState?.user?.details.weight}kg</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-[25px]">Height</h1>
              <p className="text-[20px]">{userState?.user?.details.height}cm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[45%] w-full p-1 flex flex-col items-center">
        <h1 className="text-[33px] mb-8">Your Daily Goals</h1>
        <div className="w-full flex justify-center gap-4">
          <CircularProgressBar
            percentage={hydrationPercentage}
            title={"Hydration"}
            value={userState?.user?.details.hydration}
            unit={"ml"}
          />
          <CircularProgressBar
            percentage={sleepPercentage}
            title={"Sleep"}
            value={userState?.user?.details.sleepCycle}
            unit={"hrs"}
          />
          <CircularProgressBar
            percentage={stepPercentage}
            title={"Steps"}
            value={userState?.user?.details.steps}
            unit={"steps"}
          />
        </div>
      </div>
      <div className="h-[45%] w-full p-5 flex flex-col items-center mt-7">
        <div className="flex w-[80%] justify-between">
          <h1 className="text-[33px] w-full text-center pl-28">Manage Devices</h1>
          <div className="flex gap-5">
            <div
              className="p-3 bg-[--secondary] rounded-full cursor-pointer"
              onClick={() => handleScroll("left")}
            >
              <MoveLeft />
            </div>
            <div
              className="p-3 bg-[--secondary] rounded-full cursor-pointer"
              onClick={() => handleScroll("right")}
            >
              <MoveRight />
            </div>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="p-4 px-14 w-full overflow-x-scroll overflow-y-hidden hide-scrollbar flex gap-10 justify-center"
        >
          {activeDevices.map((device) => (
            <ManageDeviceCard
              key={device.name}
              image={device.img}
              name={device.name}
              title = {device.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
