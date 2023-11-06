import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Testimonials from "../components/Testimonials";
import Cources from "../components/Cources";

const Layout = () => {
  return (
    <div className="min-w-[400px]">
      <section className="home md:h-[100vh] bg-gradient-to-b from-[#6F7DFB] to-[#26308C]">
        <Navbar />
        <Home />
      </section>

      <section className="px-10 lg:px-20 h-[100vh] lg:h-[60vh]">
        <Testimonials />
      </section>

      <section className="px-10 lg:px-20 h-[100vh] md:h-[80vh] bg-gradient-to-b from-[#6F7DFB] to-[#26308C]">
        <Cources />
      </section>
    </div>
  );
};

export default Layout;
