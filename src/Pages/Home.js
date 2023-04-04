import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import st1 from "../Assets/st1.jpg";
import st2 from "../Assets/st2.jpeg";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <header className="relative h-[110vh]">
        <Navbar />
        <Hero />
      </header>
      <div className="bg-[#38383b]  min-h-[110vh] max-h-fit w-[100%] px-2 py-5">
        <h2 className="font-poppins text-white text-4xl ml-14 mt-4 md-sm:text-center">
          Upcoming Classes
        </h2>
        <div className="flex items-center mt-5 md-sm:flex-col justify-center">
          <div className="w-[45%] relative md-sm:w-[90%]">
            <h3 className="absolute top-[50%]  left-[50%] transform -translate-x-2/4 -translate-y-2/4  text-white text-4xl font-poppins">
              Yoga Aerobics
            </h3>
            <img className="w-[100%] px-2" src={st1} />
          </div>
          <div className="w-[45%] md-sm:w-[90%] md-sm:mt-3 relative">
            <h3 className="absolute top-[50%] left-[50%] transform -translate-x-2/4 -translate-y-2/4 text-white text-4xl font-poppins ">
              Instructor
            </h3>
            <img className="w-[100%] px-2" src={st2} />
          </div>
        </div>
        <div className="mt-5 ml-14">
          <h4 className="text-white font-poppins text-2xl sm:text-xl">
            Besides our regular schedule, we also <br /> frequently host
            visiting teachers and <br /> speakers.
          </h4>
          <button className=" mt-7 cursor-pointer text-white font-poppins bg-[#a8a6a1] px-10 py-4">
            View More
          </button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
