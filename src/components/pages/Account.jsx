import React from "react";
import SavedShows from "../SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          alt="bg-img"
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
        />
        <div className="bg-black/50 inset-0 fixed h-[550px] w-full"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-['Press_Start_2P']">
            My List
          </h1>
        </div>
        <SavedShows />
      </div>
    </>
  );
};

export default Account;
