import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Testimonials from "../components/Testimonials";
import Cources from "../components/Cources";
import GetApp from "../components/GetApp";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-w-[400px]">
      <section className="home md:h-[100vh] bg-gradient-to-b from-[#6F7DFB] to-[#26308C]">
        <Navbar />
        <Home />
      </section>

      <section className="px-10 lg:px-20 h-[100vh] lg:h-[90vh]">
        <Testimonials />
      </section>

      <section className="px-10 lg:px-20 h-[100vh] md:h-[90vh] bg-gradient-to-b from-[#6F7DFB] to-[#26308C]">
        <Cources />
      </section>

      <section className="get-app px-10 lg:px-20 h-[100vh] md:h-[80vh] ">
        <GetApp />
      </section>

      <section className="footer px-10 lg:px-20 h-[100vh] md:h-[80vh] bg-[#070917]">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
