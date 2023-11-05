import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

const Layout = () => {
  return (
    <div>
      <section className="home md:h-[100vh] bg-gradient-to-b from-[#6F7DFB] to-[#26308C]">
        <Navbar />
        <Home />
      </section>
    </div>
  );
};

export default Layout;
