import React from "react";
import { Link } from "react-router-dom";

import "./navbarStyles.css";

const NavBar = () => {
  return (
    <nav className="nav_bar">
      <Link className="nav_link" to="/intro">
        Intro
      </Link>

      <Link className="nav_link" to="/project">
        Projects
      </Link>

      <Link className="nav_link" to="/about">
        About
      </Link>

      <Link className="nav_link" to="/experience">
        Experience
      </Link>

      <Link className="nav_link" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
