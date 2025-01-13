import { ArrowLeft, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
} from "../../components/ui/drawer";
import { Link } from "react-router-dom";
import DeviceTypeModal from "../../components/Modals/DeviceTypeModal";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../utils";
import { toast } from "sonner";

const Onboard2 = () => {
  const [toggelDrawer, setToggelDrawer] = useState(false);
  // const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const [isApple, setIsApple] = useState<Boolean>(false);
  const [isAndroid, setIsAndroid] = useState<Boolean>(false);
  const [isRing, setIsRing] = useState<Boolean>(false);
  const [isApp, setIsApp] = useState<Boolean>(false);
  const [devicehasSelected, setDeviceHasSelected] = useState(true);
  const [deviceTypeSelected, setdeviceTypeSelected] = useState<Boolean>(false);
  const [deviceNameSelected, setdeviceNameSelected] = useState<string>('');
  const [deviceConnected, setDeviceConnected] = useState(false)

  const [allDevicesPaired, setallDevicesPaired] = useState<any>([])


  const handleModal2Close = () => {
    setDeviceHasSelected(true)
    setIsApple(false)
    setIsApp(false)
    setIsRing(false)
    setIsAndroid(false)
  }
  const onboardState = useSelector((state: any) => state.onboardState);
  const [token, setToken] = useState('');
  const setDeviceType = (deviceType: string) => {
    setdeviceNameSelected(deviceType);
    setdeviceTypeSelected(true);
  
  };

  useEffect(()=>{
    setToken(localStorage.getItem('token') || '');
  },[])

  // useEffect(() => {
  //   allDevicesPaired.push(deviceNameSelected);
  // }, [deviceNameSelected]);

  console.log(allDevicesPaired)

  const handleSelection = (type: string) => {
    setToggelDrawer(false);
    setDeviceHasSelected(false);
    if (type == "Apple") {
      setIsApple(true);
      console.log(isApple);
    } else if (type == "Android") {
      setIsAndroid(true);
    } else if (type == "App") {
      setIsApp(true);
    } else {
      setIsRing(true);
    }
  };

  const handleSubmit = async () =>{
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/user/setInfo`, onboardState,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      toast.success(response.data.msg);
      window.location.href = '/home';
    } catch (error : any) {
      console.error(error.message)
    }
  }

  const handleDeviceTypeModalClose = () => {
    setdeviceTypeSelected(false);
    handleModal2Close();
  }

  console.log(deviceNameSelected)

  return (
    <div>
      <div className="bg-[--primary-background] w-[100vw] h-[100vh] flex items-center justify-center">
        <div className="bg-[--secondary-background] h-[330px] w-[450px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg translate-y-[-15%]">
          {devicehasSelected && (
            <>
              <div className="w-[90%] mx-auto flex flex-col mt-[40px]">
                <div className="flex gap-2 justify-center items-center">
                  <Link to="/onboard/1">
                    <div className="bg-[--secondary] h-[60px] w-[60px] rounded-[100%] rounded-br-none flex items-center justify-center hover:cursor-pointer hover:bg-purple-[--ternary]">
                      <ArrowLeft
                        size={30}
                        className="hover:rotate-[35deg] transition-all delay-100"
                      />
                    </div>
                  </Link>
                  <div>
                    <h1 className="text-[40px] mx-auto tracking-normal">
                      Sync
                    </h1>
                  </div>
                </div>
                <div className="w-[100%] flex justify-center mt-4">
                  <p className="text-[--graytext] text-sm">
                    Help us know you more!
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {/* {show the device here} */}
                <div
                  onClick={() => setToggelDrawer(!toggelDrawer)}
                  className="w-[90%] mt-5 h-[50px] mx-auto flex items-center justify-center gap-5"
                >
                  <h1>Add Device</h1>
                  <button className="bg-[--secondary] p-3 rounded-full">
                    <Plus />
                  </button>
                </div>
                <div className="flex justify-end w-[95%] mt-4">
                  <button className={`py-2 w-[30%] rounded-xl px-2 text-lg  to-[--primary] transition duration-300 ease-in-out hover:brightness-90 ${deviceConnected ? 'bg-black text-white' : "bg-gradient-to-r from-[--secondary]"}`} onClick={handleSubmit}>
                   {deviceConnected ? 'Submit': 'Skip' }
                  </button>
                  {/* <button onClick={handleSubmit}>Submit</button> */}
                </div>
              </div>
            </>
          )}
        </div>

        <Drawer
          open={toggelDrawer}
          onOpenChange={(isOpen) => setToggelDrawer(isOpen)}
        >
          <DrawerContent>
            <div className="flex justify-between">
              <div className="flex flex-col justify-start items-start w-[20%] ">
                <img src="/Onboarding/Onboard1.png" />
              </div>
              <div className="mx-auto w-[85%]  h-[380px] ">
                <DrawerHeader>
                  <div className="flex justify-center w-full">
                    <h1 className="text-xl">Pair New Device</h1>
                  </div>
                </DrawerHeader>
                <div className="p-4 pb-0 flex translate-y-[-10%] w-[1000px] gap-2">
                  <button
                    onClick={() => handleSelection("Apple")}
                    className="flex w-[500px] flex-col items-center justify-center hover:scale-105 transition-all delay-150"
                  >
                    <img src="/Onboarding/AppleWatch.png" />
                    <h2>Apple Watch</h2>
                  </button>
                  <button
                    onClick={() => handleSelection("Android")}
                    className="flex w-[500px] flex-col items-center justify-center hover:scale-105 transition-all delay-150"
                  >
                    <img src="/Onboarding/AndroidWatch.png" />
                    <h2>Android Watch</h2>
                  </button>
                  <button
                    onClick={() => handleSelection("Ring")}
                    className="flex w-[500px] flex-col items-center justify-center hover:scale-105 transition-all delay-150"
                  >
                    <img src="/Onboarding/SmartRing.png" />
                    <h2 className="translate-y-[-40%]">Smart Ring</h2>
                  </button>
                  <button
                    onClick={() => handleSelection("App")}
                    className="flex w-[500px] flex-col items-center justify-center hover:scale-105 transition-all delay-150"
                  >
                    <img src="/Onboarding/SmartApp.png" />
                    <h2 className="translate-y-[-40%]">Smart App</h2>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-end items-end w-[20%]">
                <img src="/Onboarding/Onboard2.png" />
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {isApple && (
        <div className="container-2 flex justify-center items-center absolute top-0 h-screen w-screen">
          <div className=" modal-2 bg-[--secondary-background] h-[330px] w-[450px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg  ">


            <div className=" p-6 rounded-md">
              <div className="w-[90%] mx-auto flex flex-col mt-[10px] ">
                <div className="flex gap-2 justify-center items-center">
                  <Link to="/onboard/2">
                    <div onClick={() => handleModal2Close()} className="bg-[--secondary] h-[60px] w-[60px] rounded-[100%] rounded-br-none flex items-center justify-center hover:cursor-pointer hover:bg-purple-[--ternary]">
                      <ArrowLeft
                        size={30}
                        className="hover:rotate-[35deg] transition-all delay-100"
                      />
                    </div>
                  </Link>
                  <div>
                    <h1 className="w-[300px] text-[32px] mx-auto tracking-normal">
                      Choose your Device
                    </h1>
                  </div>
                </div>
                <div className="w-[100%] flex justify-center mt-1">
                  <p className="text-[--graytext] text-sm">
                    Select your device from the below options
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-8">
                <div className="w-[90%] mt-5 h-[50px] mx-auto  flex flex-col  items-center justify-center gap-5">
                  <button
                    onClick={() => setDeviceType("AppleSeries3")}
                    className=" py-2 w-[280px] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90
                flex  justify-evenly items-center h-[50px] hover:scale-105" >
                    <div>
                      <img src="/Onboarding/Devices/AppleSeries3.png" alt="" className="h-[40px] " />
                    </div>
                    <div>
                      <p className="text-md">Apple Watch Series 3 </p>
                    </div>
                  </button>
                  <button
                    onClick={() => setDeviceType("AppleSeries2")}
                    className=" py-2 w-[280px] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90
                flex justify-evenly items-center  h-[50px]  hover:scale-105
                " >
                    <div>
                      <img src="/Onboarding/Devices/AppleSeries2.png" alt="" className="h-[60px] translate-x-[-10%] translate-y-[-3%] " />
                    </div>

                    <div>
                      <p className="text-md translate-x-[-8%]  ">Apple Watch Series 2 </p>
                    </div>

                  </button>

                </div>
              </div>
            </div>



          </div>
        </div>
      )}
      {isAndroid && (
        <div className="container-2 flex justify-center items-center absolute top-0 h-screen w-screen">

          <div className=" modal-2 bg-[--secondary-background] h-[330px] w-[450px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg  ">


            <div className=" p-6 rounded-md">
              <div className="w-[90%] mx-auto flex flex-col mt-[10px] ">
                <div className="flex gap-2 justify-center items-center">
                  <Link to="/onboard/2">
                    <div onClick={() => handleModal2Close()} className="bg-[--secondary] h-[60px] w-[60px] rounded-[100%] rounded-br-none flex items-center justify-center hover:cursor-pointer hover:bg-purple-[--ternary]">
                      <ArrowLeft
                        size={30}
                        className="hover:rotate-[35deg] transition-all delay-100"
                      />
                    </div>
                  </Link>
                  <div>
                    <h1 className="w-[300px] text-[32px] mx-auto tracking-normal">Choose your Device</h1>
                  </div>
                </div>
                <div className="w-[100%] flex justify-center mt-1">
                  <p className="text-[--graytext] text-sm">Select your device from the below options</p>
                </div>

              </div>


              <div className="flex flex-col gap-5 mt-8" >
                <div className="w-[90%] mt-5 h-[50px] mx-auto  flex flex-col  items-center justify-center gap-5">


                  <button
                    onClick={() => setDeviceType("SamsungGalaxy")}
                    className=" py-2 w-[280px] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90
                flex  justify-evenly items-center h-[50px] hover:scale-105
                " >
                    <div>
                      <img src="/Onboarding/Devices/SamsungGalaxy.png" alt="" className="h-[40px] " />
                    </div>
                    <div>
                      <p className="text-md">Samsung Galaxy Watch</p>
                    </div>

                  </button>
                  <button
                    onClick={() => setDeviceType("Fitbit")}
                    className=" py-3 w-[280px] mx-auto rounded-xl px-3 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90
                flex justify-between items-center  h-[50px]  hover:scale-105
                " >
                    <div className="w-[30%] ">
                      <img src="/Onboarding/Devices/AppleSeries2.png" alt="" className="h-[60px] translate-x-[-10%] translate-y-[-3%] " />
                    </div>

                    <div className="w-[60%]">
                      <p className="text-md translate-x-[-8%]  ">Fitbit Versa 4  </p>
                    </div>

                  </button>

                </div>
              </div>
            </div>



          </div>
        </div>
      )}
      {isRing && (
        <div className="container-2 flex justify-center items-center absolute top-0 h-screen w-screen">

          <div className=" modal-2 bg-[--secondary-background] h-[330px] w-[450px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg  ">


            <div className=" p-6 rounded-md">
              <div className="w-[90%] mx-auto flex flex-col mt-[10px] ">
                <div className="flex gap-2 justify-center items-center">
                  <Link to="/onboard/2">
                    <div onClick={() => handleModal2Close()} className="bg-[--secondary] h-[60px] w-[60px] rounded-[100%] rounded-br-none flex items-center justify-center hover:cursor-pointer hover:bg-purple-[--ternary]">
                      <ArrowLeft
                        size={30}
                        className="hover:rotate-[35deg] transition-all delay-100"
                      />
                    </div>
                  </Link>
                  <div>
                    <h1 className="w-[300px] text-[32px] mx-auto tracking-normal">Choose your Device</h1>
                  </div>
                </div>
                <div className="w-[100%] flex justify-center mt-1">
                  <p className="text-[--graytext] text-sm">Select your device from the below options</p>
                </div>

              </div>


              <div className="flex flex-col gap-5 mt-8" >
                <div className="w-[90%] mt-5 h-[50px] mx-auto  flex flex-col  items-center justify-center gap-5">


                  <button
                    onClick={() => setDeviceType("BoatRing")}
                    className=" py-2 w-[280px] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90
                flex  justify-evenly items-center h-[50px] hover:scale-105
                " >
                    <div>
                      <img src="/Onboarding/Devices/BoatRing.png" alt="" className="h-[40px] " />
                    </div>
                    <div>
                      <p className="text-md">Boat Ring</p>
                    </div>

                  </button>
                  <button
                    onClick={() => setDeviceType("OuraRing")}
                    className=" py-2 w-[280px] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90
                flex justify-evenly items-center  h-[50px]  hover:scale-105
                " >
                    <div>
                      <img src="/Onboarding/Devices/OuraRing.png" alt="" className="h-[40px] translate-x-[-10%] translate-y-[-3%] " />
                    </div>

                    <div>
                      <p className="text-md translate-x-[-8%]  ">Oura Ring 4 </p>
                    </div>

                  </button>

                </div>
              </div>
            </div>



          </div>
        </div>
      )}
      {isApp && (
        <div className="container-2 flex justify-center items-center absolute top-0 h-screen w-screen">

          <div className=" modal-2 bg-[--secondary-background] h-[330px] w-[450px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg  ">


            <div className=" p-6 rounded-md">
              <div className="w-[90%] mx-auto flex flex-col mt-[10px] ">
                <div className="flex gap-2 justify-center items-center">
                  <Link to="/onboard/2">
                    <div onClick={() => handleModal2Close()} className="bg-[--secondary] h-[60px] w-[60px] rounded-[100%] rounded-br-none flex items-center justify-center hover:cursor-pointer hover:bg-purple-[--ternary]">
                      <ArrowLeft
                        size={30}
                        className="hover:rotate-[35deg] transition-all delay-100"
                      />
                    </div>
                  </Link>
                  <div>
                    <h1 className="w-[300px] text-[32px] mx-auto tracking-normal">Choose your Device</h1>
                  </div>
                </div>
                <div className="w-[100%] flex justify-center mt-1">
                  <p className="text-[--graytext] text-sm">Select your device from the below options</p>
                </div>

              </div>


              <div className="flex flex-col gap-5 mt-8" >
                <div className="w-[90%] mt-5 h-[50px] mx-auto  flex flex-col  items-center justify-center gap-5">

                  <button
                    onClick={() => setDeviceType("FitBitApp")}
                    className=" py-2 w-[280px] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90
                flex justify-evenly items-center  h-[50px]  hover:scale-105
                " >
                    <div>
                      <img src="/Onboarding/SmartApp.png" alt="" className="h-[60px] translate-x-[-10%] translate-y-[-3%] " />
                    </div>

                    <div>
                      <p className="text-md translate-x-[-8%]  ">Fitbit App</p>
                    </div>

                  </button>
                  <button
                    onClick={() => setDeviceType("AppleApp")}
                    className=" py-2 w-[280px] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90
                flex justify-evenly items-center  h-[50px]  hover:scale-105
                " >
                    <div>
                      <img src="/Onboarding/Devices/AppleApp.png" alt="" className="h-[60px] translate-x-[-10%] translate-y-[-3%] " />
                    </div>

                    <div>
                      <p className="text-md translate-x-[-8%]  ">Apple App</p>
                    </div>

                  </button>
                  <button
                    onClick={() => setDeviceType("SleepApp")}
                    className=" py-2 w-[280px] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90
                flex justify-evenly items-center  h-[50px]  hover:scale-105
                " >
                    <div>
                      <img src="/Onboarding/Devices/SleepApp.png" alt="" className="h-[40px] translate-x-[-10%] translate-y-[-3%] " />
                    </div>

                    <div>
                      <p className="text-md translate-x-[-8%]  ">Sleep App</p>
                    </div>

                  </button>
                  <button>
                    <div>
                      <p className="text-md translate-x-[-8%]  ">
                        Apple Watch Series 2{" "}
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {deviceTypeSelected &&
        <DeviceTypeModal
          deviceNameSelected={deviceNameSelected}
          setdeviceTypeSelected={handleDeviceTypeModalClose} 
          setDeviceConnected={setDeviceConnected}
          setallDevicesPaired={setallDevicesPaired}
          
        />
      }
    </div>
  );
};

export default Onboard2;

