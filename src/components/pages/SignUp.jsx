import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../context/AuthContext";

const SignUp = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const { user, signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email.current.value, password.current.value);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          alt="bg-img"
          className="w-full h-full object-cover hidden sm:block absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
        />
        <div className="w-full h-screen absolute inset-0 bg-black/60 "></div>
        <div className="fixed w-full px-4 py-24 h-screen z-50">
          <div className="max-w-[450px] h-[600px] bg-black/75 text-white mx-auto">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="font-bold text-3xl">Sign Up</h1>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                  ref={email}
                  className="p-3 mt-3 bg-gray-600"
                  type="email"
                  placeholder="Email"
                />
                <input
                  ref={password}
                  className="p-3 mt-3 bg-gray-600"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 my-3 py-3 rounded">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600 mt-3">
                  <p>
                    <input type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="mt-12 text-sm text-gray-600">
                  New to Netflix?
                  <span
                    onClick={() => {
                      navigate("/signIn");
                    }}
                    className="text-white font-bold cursor-pointer"
                  >
                    {" "}
                    Sign In.
                  </span>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
