import logo from "./utils/finalelogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full z-[100] absolute flex justify-around items-center p-4 font-['Press_Start_2P']">
      {/* <img
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
        className="w-40 cursor-pointer md:w-48"
      /> */}
      <h1 className="text-red-600 text-2xl  cursor-pointer">NOTFLIX</h1>
      <div className="text-white pl-24 text-xs">
        <button onClick={() => navigate("/login")} className="pr-4">
          Sign In
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-red-600 md:px-4 md:py-3 rounded px-3 py-2"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
