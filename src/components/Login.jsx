import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover scale-140 -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4371a395-0e42-46ae-be36-5755eebc638b/web/IN-en-20260209-TRIFECTA-perspective_3a6d8659-ddfe-4547-9584-dce64c02c230_large.jpg"
        alt=""
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 -z-0"></div>

      {/* Navbar */}
      <div className="relative z-10 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Login;
