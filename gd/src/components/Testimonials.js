import React from "react";
import Testi1 from "../components/Testi1";
import Testi2 from "../components/Testi2";

const Testimonials = () => {
  return (
    <div className=" flex flex-col mt-14 md:flex md:flex-row">
      <div className=" flex-1 md:order-1 md:px-10">
        <h1 className=" text-3xl font-bold mb-5 md:text-6xl md:pt-20 lg:font-extrabold ">
          What our students say
        </h1>
        <p className=" text-lg font-bold opacity-80 mb-12 md:text-2xl md:leading-10">
          All students get access to all the videos and also the source code of
          the projects. <br /> You will also have access to a private Discord
          channel where you can discuss your doubts.
        </p>
        <button className=" shadow-lg bg-[#DA722C] hover:scale-105  px-3 py-2 rounded-md text-white font-bold hover:bg-[#6F7DFB] duration-300">
          Learn More
        </button>
      </div>
      <div className=" flex-1 mt-11 relative px-5">
        <div className="ml-14 md:ml-20 mb-10 ">
          <Testi1 />
        </div>
        <div className=" absolute right-10 md:right-28">
          <Testi2 />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
