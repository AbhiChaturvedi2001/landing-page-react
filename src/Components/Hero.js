import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="absolute bottom-20 text-white left-10">
          <h1 className="text-7xl tracking-wide md:text-6xl md-sm:text-5xl s:text-3xl">
            Taking care of your <br /> mind, body and soul.
          </h1>
          <h2 className="text-2xl mt-8 tracking-wider sm:text-md s:text-sm ">
            Familiarize yourself with our studio and course <br /> offering by
            signing up for a complimentary drop-in <br /> class now.
          </h2>
          <p className="underline text-[gray] text-xl cursor-pointer font-poppins mt-3">
            Book a Class
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
