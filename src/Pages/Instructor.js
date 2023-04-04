import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Instructor = () => {
  return (
    <>
      <div className="About-page bg-[#38383b] h-[50vh]">
        <Navbar />
        <div className="flex items-center h-[80%] px-10">
          <h2 className="text-7xl text-white">Our Instructor</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Instructor;
