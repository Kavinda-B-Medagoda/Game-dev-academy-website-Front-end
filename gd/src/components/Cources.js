import React from "react";
import { BsClockFill } from "react-icons/bs";
import img1 from "../Assets/images/Rectangle 7.png";
import img2 from "../Assets/images/m.png";

const Cources = () => {
  return (
    <div className="pt-24">
      <div className="">
        <h1 className="text-center text-5xl font-bold text-white lg:text-7xl">
          Our Courses
        </h1>
      </div>
      <div className="items mt-10 md:flex md:flex-row md:justify-evenly  flex flex-col justify-center items-center">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-10">
          <div>
            <img class="p-4 rounded-t-lg" src={img1} alt="product image" />
          </div>
          <div class="px-5 pb-2">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
              Game Design Essentials
            </h5>
            <span className=" font-bold flex items-center">
              <BsClockFill />
              <span className=" ml-1">8 Hrs</span>
            </span>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-10">
          <div>
            <img class="p-4 rounded-t-lg" src={img2} alt="product image" />
          </div>
          <div class="px-5 pb-2">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
              Unity Game Engine Fundamentals
            </h5>
            <span className=" font-bold flex items-center">
              <BsClockFill />
              <span className=" ml-1">8 Hrs</span>
            </span>
          </div>
        </div>
      </div>
      <div className=" text-center mt-2">
        <button className=" shadow-lg bg-[#DA722C] hover:scale-105 px-4 mb-3 py-3 rounded-md text-white font-bold hover:bg-[#6F7DFB] duration-300">
          All Courses
        </button>
      </div>
    </div>
  );
};

export default Cources;
