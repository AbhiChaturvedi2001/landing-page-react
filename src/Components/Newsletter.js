import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-container flex justify-center items-center">
        <div className="text-center">
          <div className="text-4xl text-white font-poppins tracking-wider">
            Subscribe to Our NewsLetter
          </div>
          <div className="font-poppins text-white mt-4 tracking-wide">
            Sign up to recieve and updates
          </div>
          <div className="mt-6 input-container">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="E-mail" />
            <button className=" mt-7 cursor-pointer text-white font-poppins bg-[#a8a6a1] w-[10rem] ml-2 p-[1.6rem]">
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
