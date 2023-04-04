import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [navbar, setnavbar] = useState(false);

  const openNavbar = () => {
    if (!navbar) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

  return (
    <>
      <div>
        <nav className="flex justify-between items-center px-10 h-[15vh] z-10">
          <h1 className="font-acumin text-white text-3xl">
            <Link to="/">Colima</Link>
          </h1>
          <ul className="navlinks font-poppins font-extralight text-white flex justify-around items-center w-[48%] lg:w-[55%] md:hidden">
            <li>
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/instructor">Our Instructors</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <button className="bg-[#a8a6a1] px-8 py-5 cursor-pointer text-white font-normal hover:bg-[#91908c] ease-in-out delay-75 transition">
              Book a Class
            </button>
          </ul>
          <HiOutlineBars2
            onClick={openNavbar}
            className="text-5xl text-white cursor-pointer hidden md:block"
          />
        </nav>

        <div
          className={`responsive-navbar bg-[#a8a6a1] w-[100%] h-[100%] duration-100 ease-in-out relative px-5 py-5 ${
            navbar ? `block` : `hidden`
          }`}
        >
          <RxCross1 className="absolute right-10 cursor-pointer text-4xl" />
          <ul className="navlinks font-poppins font-extralight text-white flex flex-col justify-center m-auto items-center w-[48%] mt-20 text-4xl text-center lg:w-[55%] md:block">
            <li>
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/instructor">Our Instructors</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <button className="bg-[#a8a6a1] px-8 py-5 cursor-pointer text-white font-normal hover:bg-[#91908c] ease-in-out delay-75 transition">
              Book a Class
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
