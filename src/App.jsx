import React from "react";
import NavBar from "./pages/NavBar";
import { Route, Routes } from "react-router-dom";

//Importing pages
import Intro from "./pages/Intro";
import Project from "./pages/Project";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
