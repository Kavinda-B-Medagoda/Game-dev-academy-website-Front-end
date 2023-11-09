import React from "react";
import img1 from "../Assets/images/Group 8.png";
import img2 from "../Assets/images/Vector.png";

const GetApp = () => {
  return (
    <div className=" pt-24">
      <h1 className=" text-center text-4xl font-bold">Get our app</h1>
      <p className=" font-bold text-center my-5">
        You can use our App for better experience on smartphones
      </p>
      <div className=" flex flex-col gap-5 items-center justify-center">
        <div className="  bg-black flex items-center gap-5 justify-center p-5 rounded-md w-96">
          <img src={img1} alt="" />
          <h2 className=" text-white text-3xl">Google Play</h2>
        </div>
        <div className="  bg-black flex items-center gap-5 justify-center p-5 rounded-md w-96">
          <img src={img2} alt="" />
          <h2 className=" text-white text-3xl">App Store</h2>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
