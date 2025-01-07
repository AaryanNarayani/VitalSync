import { BASE_URL } from "../utils";

function Landing() {
  const handleOauth = () => {
    window.location.href = `${BASE_URL}/api/v1/auth/google`;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-[140px] font-extrabold text-black mb-8 drop-shadow-lg">
        Health Advisor
      </div>
      <button
        className="bg-slate-50 p-4 w-72 text-lg text-black rounded-md shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleOauth}
      >
        <span className="p-4 text-green-600 font-bold">G</span>
        Continue with Google
      </button>
    </div>
  );
}

export default Landing;
