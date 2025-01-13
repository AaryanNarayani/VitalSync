import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Welcome to Simulation Side
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Start your
            simulation now!
          </p>
          <Link to="/simulation">
            <Button className="bg-[--primary] hover:bg-[--primary]/90 text-white font-semibold py-3 px-6 rounded-full text-lg  transform hover:scale-101 hover:shadow-lg">
              Launch Simulation
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
