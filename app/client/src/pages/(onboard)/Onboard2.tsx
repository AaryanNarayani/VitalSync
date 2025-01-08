import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
} from "../../components/ui/drawer";
import { Link } from "react-router-dom";
import { Handle } from "vaul";

const Onboard2 = () => {
  const [toggelDrawer, setToggelDrawer] = useState(false);
  const [goal, setGoal] = useState(300);
  const data = [{ goal: goal }];
  const [selected, setSelected] = useState<any>(null)

  const handleSelection = () => {
    setToggelDrawer(false)

  }



  return (
    <div className="bg-[--primary-background] w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="bg-[--secondary-background] h-[330px] w-[450px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg">
        <div className="w-[90%] mx-auto flex flex-col mt-[40px]">
          <div className="flex gap-2 justify-center items-center">

            <Link to="/onboard/1">

              <div
                className="bg-[--secondary] h-[60px] w-[60px] rounded-[100%] rounded-br-none flex items-center justify-center hover:cursor-pointer hover:bg-purple-[--ternary]"
              >
                <ArrowLeft
                  size={30}
                  className="hover:rotate-[35deg] transition-all delay-100"
                />

              </div>
            </Link>
            <div>
              <h1 className="text-[40px] mx-auto tracking-normal">Sync</h1>
            </div>
          </div>
          <div className="w-[100%] flex justify-center mt-4">
            <p className="text-[--graytext] text-sm">Help us know you more!</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
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
            <button className="py-2 w-[30%] rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90">
              Skip
            </button>
          </div>
        </div>
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
                <div className="flex  justify-center w-full">
                  <h1 className="text-xl">Pair New Device</h1>
                </div>
              </DrawerHeader>
              <div className="p-4 pb-0 flex translate-y-[-10%] w-[1000px] gap-2 ">

                <button
                  onClick={handleSelection}
                  className="flex w-[500px] flex-col items-center justify-center hover:scale-105 transition-all delay-150  "
                >
                  <img src="/Onboarding/AppleWatch.png " />
                  <h2>Apple Watch</h2>
                </button>
                <button onClick={handleSelection} className="flex w-[500px]  flex-col items-center justify-center  hover:scale-105 transition-all delay-150">
                  <img src="/Onboarding/AndroidWatch.png" />
                  <h2>Android Watch</h2>
                </button>
                <button onClick={handleSelection} className="flex w-[500px] flex-col  items-center justify-center hover:scale-105 transition-all delay-150">
                  <img src="/Onboarding/SmartRing.png" />
                  <h2 className="translate-y-[-40%]">Smart Ring</h2>


                </button>
                <button onClick={handleSelection} className="flex w-[500px] flex-col  items-center justify-center hover:scale-105 transition-all delay-150" >
                  <img src="/Onboarding/SmartApp.png" />
                  <h2 className="translate-y-[-40%]">Smart App</h2>

                </button>
              </div>
            </div>


            <div className="flex flex-col justify-end items-end w-[20%] bg ">
              <img src="/Onboarding/Onboard2.png" />
            </div>


          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Onboard2;
