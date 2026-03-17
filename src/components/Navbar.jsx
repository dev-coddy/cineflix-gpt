import { useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  console.log(user?.email);

  const handleLogout = async () => {
    try {
      await logOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full z-[100] absolute flex justify-around items-center p-4 font-['Press_Start_2P']">
      <h1
        className="text-red-600 text-lg  sm:text-2xl  cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        NOTFLIX
      </h1>
      {user?.email ? (
        <div className="text-white pl-24 text-xs">
          <button onClick={() => navigate("/account")} className="pr-4">
            Account
          </button>
          <button
            onClick={() => handleLogout()}
            className="bg-red-600 md:px-4 md:py-3 rounded px-3 py-2"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="text-white pl-24 text-xs">
          <button onClick={() => navigate("/signIn")} className="pr-4">
            Sign In
          </button>
          <button
            onClick={() => navigate("/signUp")}
            className="bg-red-600 md:px-4 md:py-3 rounded px-3 py-2"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
