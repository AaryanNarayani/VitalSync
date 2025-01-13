import { Link } from "react-router-dom";

export default function Landing(){
    return(
        <>
            <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center font-semibold text-[100px]">
                <div>Simulation Frontend</div>
                <Link to="/signup">
                <div className="h-[40px] w-[100%] bg-gradient-to-r from-[--secondary] to-[--primary] border flex items-center justify-center gap-3 rounded-lg mt-6 mb-5 p-5 text-sm hover:cursor-pointer hover:brightness-90">
                    Get Started
                </div>
                </Link>
            </div> 
        </>
    )
}   