import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsTextLeft, BsXLg } from "react-icons/bs";

const Navbar = () => {
  const links = [
    { link: "/about", tag: "About" },
    { link: "/services", tag: "Services" },
    { link: "/work", tag: "Our Work" },
  ];

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="fixed top-0 left-0 text-white flex justify-between px-8 py-5 items-center h-[70px] z-20 w-full">
        <div className="logo">
          <p className=" text-4xl font-extrabold cursor-pointer">GD.</p>
        </div>

        <div className="absolute right-5" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <BsTextLeft className=" text-2xl md:hidden" />
          ) : (
            <BsXLg className=" text-2xl md:hidden" />
          )}
        </div>

        <div className="navLinks hidden md:block">
          <ul className="md:flex md:flex-row items-center">
            {links.map((item, index) => (
              <li key={index} className="font-semibold text-lg ml-10">
                <Link to={item.link}>{item.tag}</Link>
              </li>
            ))}
            <button className="ml-10 font-semibold px-2 py-1 bg-[#023047] rounded-md ">
              Enroll Now
            </button>
          </ul>
        </div>
      </div>
      <div
        className={`mob-navLinks md:hidden bg-black text-white absolute w-full h-full z-[10] md:z-auto transition-all duration-500  ${
          isOpen ? "top-[-100%]" : "top-[0]"
        }`}
      >
        <ul
          className={`absolute  left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in transition-all duration-400 text-center ${
            isOpen ? "top-[0]" : "top-[50%]"
          }`}
        >
          {links.map((item, index) => (
            <li key={index} className=" font-semibold mb-3  text-lg">
              <Link to={item.link}>{item.tag}</Link>
            </li>
          ))}
          <button className=" font-semibold px-2 py-1 bg-[#023047] rounded-md ">
            Enroll Now
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
