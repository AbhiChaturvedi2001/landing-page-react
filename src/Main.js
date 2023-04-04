import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Instructor from "./Pages/Instructor"
import Classes from "./Pages/Classes"
import Location from "./Pages/Location"
import Blog from "./Pages/Blog"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/location" element={<Location />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
