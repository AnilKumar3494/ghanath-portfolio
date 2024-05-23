import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav_bar">
      <ul>
        <li>
          <Link to="/intro">Intro</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
