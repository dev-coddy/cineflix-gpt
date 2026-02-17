import logo from "./utils/finalelogo.png";

const Navbar = () => {
  return (
    <div className="w-full z-[100] absolute flex justify-around items-center">
      <img src={logo} alt="logo" className="w-48 cursor-pointer" />
      <div className="text-white pl-24">
        <button className="pr-4">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
