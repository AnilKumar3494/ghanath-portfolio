import React from "react";
import NavBar from "../components/NavBar";

import "./homeStyles.css";

const Home = () => {
  return (
    <div className="landing_page_hero">
      <section className="landing_page_content">
        <div className="intro_text">
          <h3>Hi, I'm Ghanath Vootukuru</h3>
          <p>This would be the landing page with my short description!</p>
        </div>

        <NavBar />
      </section>
    </div>
  );
};

export default Home;
