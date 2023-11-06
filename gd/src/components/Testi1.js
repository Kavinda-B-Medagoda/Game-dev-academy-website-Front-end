import React from "react";
import img1 from "../Assets/images/Ellipse 1-1.png";

const Testi = () => {
  return (
    <div className=" w-72 rounded-lg shadow-lg hover:scale-105 duration-500 my-2 md:w-96">
      <div className="p-5 bg-[#E98643] rounded-lg text-white font-bold">
        <p>Amazing Work! Well done! </p>
      </div>
      <div className=" flex items-center py-5 relative">
        <div className="pl-5">
          <h2 className="font-bold text-xl">Jacob Jones</h2>
          <p>Designer, Facebook</p>
        </div>
        <div className="w-20 absolute right-5 bottom-5">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testi;
