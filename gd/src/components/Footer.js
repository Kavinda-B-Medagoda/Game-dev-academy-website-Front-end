import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="pt-5 md:flex items-start justify-evenly md:pt-28">
      <div>
        <div className=" text-center">
          <h2 className=" text-orange-500 font-bold mb-5">Quick Links</h2>
          <ul className=" text-white flex flex-col gap-5">
            <li className=" fonseb">
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Trams & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className=" text-center mt-10">
          <h2 className=" text-orange-500 font-bold mb-5">Course</h2>
          <ul className=" text-white flex flex-col gap-5">
            <li className=" fonseb">
              <Link>Log In</Link>
            </li>
            <li>
              <Link>Download</Link>
            </li>
            <li>
              <Link>All Courses</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" text-center mt-10 md:mt-0">
        <h2 className=" text-orange-500 font-bold mb-5">Contact US</h2>
        <p className=" text-white">Contact@gmail.com</p>
        <span className=" flex gap-5 text-3xl text-white mt-5 items-center justify-center">
          <BsFacebook />
          <BsInstagram />
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Email Address"
          className=" px-3 py-2 rounded-md mt-5 w-96"
        />
        <br />
        <button className=" text-white bg-[#023047] px-3 py-2 rounded-md mt-5 font-bold">
          Subscribe
        </button>
        <p className=" text-white font-normal mt-5">
          This website is developed by GTCoding © 2021
        </p>
      </div>
    </div>
  );
};

export default Footer;
