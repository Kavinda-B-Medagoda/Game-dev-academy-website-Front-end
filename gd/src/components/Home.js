import React from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare, BsStarFill } from "react-icons/bs";
import hero from "../Assets/images/hero-image.png";

const Home = () => {
  return (
    <div className="pt-28 lg:pt-48 px-10 lg:px-20 flex flex-col lg:flex lg:justify-between lg:flex-row relative h-full">
      <div className="left text-left flex-1 text-white mb-16">
        <h2 className=" font-bold text-4xl lg:text-7xl mb-5">
          Learn the art of Game Dev
        </h2>
        <p className=" lg:leading-8 mb-5 md:text-2xl">
          This is a comprehensive course on Game Development. <br /> You will
          learn everything from generating an idea to <br /> publishing your
          games to different platforms.
        </p>
        <button className=" px-3 py-2 bg-[#DA722C] rounded-lg">
          <Link to={""} className=" flex items-center">
            <BsPencilSquare />{" "}
            <span className=" pl-2 font-bold">Enroll Now</span>
          </Link>
        </button>
      </div>

      <div className="right flex flex-row flex-1 justify-between relative mt-40 lg:mt-0">
        <div className="r-left absolute lg:relative bottom-7 lg:top-0">
          <button className="flex flex-col lg:absolute top-5 left-20 items-center bg-white lg:w-52 lg:h-20 justify-center px-3 py-2 rounded-lg shadow-2xl mb-3 h">
            <span className="font-extrabold lg:text-3xl">32K</span>{" "}
            <span className=" font-bold ">Students Enrolled</span>
          </button>
          <button className="bg-white lg:absolute lg:top-52 lg:w-60 lg:h-20 px-3 py-2 rounded-lg shadow-2xl">
            <span className="flex items-center justify-center font-extrabold lg:text-3xl">
              4.7 <BsStarFill className="ml-2 lg:text-3xl text-yellow-500" />
            </span>
            <span className=" font-bold">Overall Rating</span>
          </button>
        </div>
        <div className="r-right absolute bottom-0 right-0 w-[150px] md:w-[445px]">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
