import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Github, Mail } from "lucide-react";
import WhyUs from "../components/cards/(landing)/WhyUs";
import { Link } from "react-router-dom";

function Landing() {


  const scrollTo = (id : string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
return (
    <>
      <div className="min-h-screen flex items-center relative">
        <div className="flex items-center gap-6 relative">
          <div className="bg-gradient-to-r from-[#9FC6F5] to-[--secondary] h-[400px] w-[400px] rounded-full absolute left-[-100px]"></div>
          <div className="flex flex-col items-center gap-6 absolute left-[200px]">
            <div className="flex flex-col items-center">
              <p className="text-5xl leading-none">Welcome to</p>
              <h1 className="text-[110px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-black to-[--primary]">
                VitalSync
              </h1>
              <p className="text-md italic">Your AI Health Partner, 24/7 </p>
            </div>
            <div className="flex gap-4">
              <button className="border border-black px-3 py-2 rounded flex items-center" onClick={() => scrollTo("features")}>
                Learn More <ArrowDown/>
              </button>
              <Link to="/signup">
              <button className="bg-[#8CC2F2] text-black px-3 py-2 rounded flex items-center hover:bg-[#8CC2F2]/90">
                Get Started<ArrowUpRight />
              </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/landingIcons/mac1.svg"
          alt="hehehehe"
          className="absolute right-0 h-[600px]"
        />
      </div>
      {/* Why us */}
      <div id="features" className="bg-gradient-to-r from-[--secondary] to-[--primary] min-h-[50vh] flex items-center relative flex-col py-32 px-72 gap-10">
        <div className="flex justify-between w-full ">
          <h1 className="text-4xl">Why Us?</h1>
          <div className="flex gap-3">
            <button className="bg-white rounded-full p-3">
              <ArrowLeft />
            </button>
            <button className="bg-white rounded-full p-3">
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="flex gap-7">
          <WhyUs />
          <WhyUs />
          <WhyUs />
        </div>
      </div>
      {/* Watch */}
      <div className="relative p-20 flex justify-center items-center min-h-[100vh]">
        <img src="/landingIcons/ai1.svg" alt="" className="absolute left-0" />
        <p className="text-5xl text-center">
          Analyse your{" "}
          <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black to-[--primary]">
            Real-Time
          </h1>{" "}
          statistics using{" "}
          <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black to-[#D6FF64]">
            Ai
          </h1>
        </p>
        <img
          src="/landingIcons/watch1.svg"
          alt=""
          className="absolute right-0 h-[600px]"
        />
      </div>
      {/* Mac 2 */}
      <div className="min-h-[100vh] flex items-center relative">
        <div className="bg-gradient-to-r from-[#9FC6F5] to-[--secondary] h-[800px] w-[800px] rounded-full absolute left-1/2 translate-x-[-50%]" />
        <img
          src="/landingIcons/mac2.svg"
          alt=""
          className="absolute left-0 h-[600px]"
        />
        <p className="absolute left-2/3 text-5xl text-center w-[300px] flex flex-wrap items-center gap-3 justify-center">
          <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black to-[#D6FF64]">
            Analyse
          </h1>{" "}
          Your{" "}
          <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black to-[--primary]">
            {" "}
            Health
          </h1>{" "}
          Data
        </p>
      </div>
      {/* footer */}
      <div className="min-h-[50vh] flex flex-col justify-center items-center relative pt-20">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-[--bricolage]">{`Built with love <3 by team CodeSnorters`}</p>
          <div className="flex gap-3">
            <Link to='https://github.com/AaryanNarayani/VitalSync' target="_blank">
              <button className="border flex rounded py-1 px-2 bg-black/10 hover:bg-black/20">
                <span className="py-1 px-2"><Github size={16}/></span>Star on Github
              </button>
            </Link>
            <Link to="mailto:aaryannarayani2004@gmail.com" target="_blank">
              <button className="border flex rounded py-1 px-2 bg-black/10 hover:bg-black/20">
              <span className="py-1 px-2"><Mail size={16}/></span>Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-full absolute bottom-0 px-5 py-4">
          <p>Copywrite © Codesnorters</p>
          <div className="flex gap-3">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
