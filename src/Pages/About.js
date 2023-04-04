import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import image1 from "../Assets/imag1.jpg";

const About = () => {
  return (
    <>
      <div className="About-page bg-[#38383b] h-[50vh]">
        <Navbar />
        <div className="flex items-center h-[80%] px-10">
          <h2 className="text-7xl text-white">About Us</h2>
        </div>
      </div>
      <div className="px-10 py-10 mt-5 flex justify-around items-center md:flex-col md:justify-center md:justify-items-center">
        <img
          className="w-[500px] h-[90vh] md:w-[700px] md:h-[70vh]"
          src={image1}
          alt
        />
        <div className="md:mt-10 w-[100%]">
          <h2 className="font-poppins tracking-wider text-2xl">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna
            aliqua. Ut <br></br> enim ad minim veniam.{" "}
          </h2>
          <p className="mt-4 font-poppins">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt <br /> in culpa qui officia
            deserunt mollit anim id est laborum. Photography by Aro <br /> Ha
          </p>
        </div>
      </div>
      <div className="about-inside-container"></div>
      <Footer />
    </>
  );
};

export default About;
