import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Work from "./work";
import Navbar from "./navbar";

const RouteComponent = () => {
  return (
    <div className="component-color">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteComponent;
