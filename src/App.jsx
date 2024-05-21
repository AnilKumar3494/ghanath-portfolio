import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

import Intro from "./components/Intro";
import Project from "./components/Project";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
};

export default App;
