import React from "react";
import img2 from "../Assets/images/Ellipse 1.png";

const Testi = () => {
  return (
    <div className=" w-72 rounded-lg shadow-lg  hover:scale-105 duration-500  my-2 md:w-96">
      <div className="p-5 bg-[#6F7DFB] rounded-lg text-white font-bold">
        <p>This is a great course. It helped me a lot. Thank you :)</p>
      </div>
      <div className=" flex items-center py-5 relative">
        <div className="pl-5">
          <h2 className=" font-bold text-xl ">Jane Cooper</h2>
          <p>Developer, Sony</p>
        </div>
        <div className="w-20 absolute right-5 bottom-5">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testi;
