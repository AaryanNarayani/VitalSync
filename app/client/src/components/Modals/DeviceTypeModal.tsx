import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDeviceData } from "../../redux/slice/OnboardSlice";

const getName = (deviceNameSelected: string): string | undefined => {
  let availableDevices = ["AppleSeries2", "AppleSeries3", "Fitbit", "SamsungGalaxy", "BoatRing", "OuraRing", "FitBitApp", "AppleApp", "SleepApp"];
  for (let item of availableDevices) {
    if (item === deviceNameSelected) {
      return item;
    }
  }
  return undefined;
};

const DeviceTypeModal = ({ deviceNameSelected, setdeviceTypeSelected, setDeviceConnected ,setallDevicesPaired}: any) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  let deviceName = getName(deviceNameSelected);

  let imageTitle;
  if (deviceName === "AppleSeries3") {
    imageTitle = "Apple Watch Series 3";
    dispatch(setDeviceData({ type: "isApple", value: true }));
  }
  else if (deviceName === "AppleSeries2") {
    imageTitle = "Apple Watch Series 2";
    dispatch(setDeviceData({ type: "isApple", value: true }));
  }
  else if (deviceName === "Fitbit") {
    imageTitle = "Fitbit Versa 4";
    dispatch(setDeviceData({ type: "isFitbit", value: true }));
  }

  else if (deviceName === "SamsungGalaxy") {
    imageTitle = "Samsung Galaxy Watch";
    dispatch(setDeviceData({ type: "isFitbit", value: true }));
  }
  else if (deviceName === "BoatRing") {
    imageTitle = "Boat Ring";
    dispatch(setDeviceData({ type: "isBoatRing", value: true }));
  }
  else if (deviceName === "OuraRing") {
    imageTitle = "Oura Ring 4";
    dispatch(setDeviceData({ type: "isOuraRing", value: true }));
  }
  else if (deviceName === "FitBitApp") {
    imageTitle = "FitBit App";
    dispatch(setDeviceData({ type: "isFitbitApp", value: true }));
  }
  else if (deviceName === "SleepApp") {
    imageTitle = "Sleep App";
    dispatch(setDeviceData({ type: "isSleepApp", value: true }));
  }
  else if (deviceName === "AppleApp") {
    imageTitle = "Apple App";
    dispatch(setDeviceData({ type: "isAppleApp", value: true }));
  }



  const handleConnect = () => {
    setIsLoading(true);
    setallDevicesPaired((prev: any) => [...prev, deviceName]);
    setTimeout(() => {
      setIsLoading(false);
      setIsConnected(true);
      setDeviceConnected(true)
    }, 2000);
  };

  const handleNext = () => {
    // Reset all states to their initial values
    setIsLoading(false);
    setIsConnected(false);
    setdeviceTypeSelected(false);
  };

  return (
    <div className="container-3 flex justify-center items-center absolute top-0 h-screen w-screen">
      <div className="modal-3 bg-[--secondary-background] h-[390px] w-[450px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg relative">
        <div className="p-6 rounded-md">
          <div className="w-[90%] mx-auto flex flex-col mt-[10px]">
            <div className="flex gap-2 justify-center items-center">
              <Link to="/onboard/2">
                <div
                  onClick={() => setdeviceTypeSelected(false)}
                  className="bg-[--secondary] h-[60px] w-[60px] rounded-[100%] rounded-br-none flex items-center justify-center hover:cursor-pointer hover:bg-purple-[--ternary]"
                >
                  <ArrowLeft
                    size={30}
                    className="hover:rotate-[35deg] transition-all delay-100"
                  />
                </div>
              </Link>
              <div>
                <h1 className="w-[330px] text-[34px] mx-auto tracking-normal">
                  Connect Your Device
                </h1>
              </div>
            </div>
            <div className="w-[100%] flex justify-center mt-1">
              <p className="text-[--graytext] text-sm">
                Connect your device using Bluetooth.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <div className="bg-geen-400 w-[90%] mt-5 h-[130px] mx-auto flex flex-col items-center justify-center gap-4">
              <div>
                <img
                  src={`/Onboarding/Devices/${deviceName}.png`}
                  alt=""
                  className="h-[160px] mt-[30px] object-cover"
                />
              </div>
              <h1 className="text-lg translate-y-[-40%]">{imageTitle}</h1>

              <button
                onClick={handleConnect}
                disabled={isLoading || isConnected}
                className={`translate-y-[-20px] py-2 w-[140px] mx-auto rounded-xl px-2 text-lg ${isConnected
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-[--secondary] to-[--primary] text-black"
                  } transition duration-300 ease-in-out hover:brightness-90`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  </div>
                ) : isConnected ? (
                  "Connected"
                ) : (
                  "Connect"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom-Right "Next" Button */}
        {isConnected && (
          <div className="absolute bottom-4 right-4 transition-all delay-100">
            <button
              onClick={handleNext}
              className="bg-black text-white py-2 px-4 rounded-md flex items-center gap-2 transition-all delay-100"
            >
              Next
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceTypeModal;