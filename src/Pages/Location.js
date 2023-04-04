import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Location = () => {
  return (
    <>
      <div className="Location-page bg-[#38383b] h-[50vh]">
        <Navbar />
        <div className="flex items-center h-[80%] px-10">
          <h2 className="text-7xl text-white">Location</h2>
        </div>
      </div>
      <div className="flex justify-around items-center h-[50vh] px-4 py-4 md-sm:flex-col md-sm:justify-center  md-sm:h-[80vh]">
        <div className="left">
          <h3 className="text-4xl font-poppins font-bold">
            123 Demo Street <br />
            Lake Tahoe, CA
          </h3>
          <p className="mt-8">
            The following text is placeholder known as “lorem ipsum,” <br />{" "}
            which is scrambled Latin used by designers to mimic real <br />{" "}
            copy. Lorem ipsum dolor sit amet nullam vel ultricies <br /> metus,
            at tincidunt.
          </p>
        </div>
        <iframe
          className="w-[40%] h-[40vh]  md-sm:w-[100%] md-sm:h-[100%] md-sm:mt-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56767.68437749354!2d77.45813912323895!3d27.21976912553736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a30a845a736f%3A0x5a0f103593eece08!2sBharatpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1680516374919!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Location;
