import logo from "./utils/finalelogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full z-[100] absolute flex justify-around items-center">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
        className="w-40 cursor-pointer md:w-48"
      />
      <div className="text-white pl-24">
        <button onClick={() => navigate("/login")} className="pr-4">
          Sign In
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-red-600 md:px-6 md:py-2 rounded px-5 py-1"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
