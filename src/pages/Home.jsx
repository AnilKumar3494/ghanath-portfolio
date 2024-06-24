import React from "react";
import NavBar from "../components/NavBar";

import "./homeStyles.css";
import QuickLinks from "../components/quickLinks";

const Home = () => {
  return (
    <>
      <NavBar className="nav_bar" />
      <div className="background_image content_align">
        <section className="landing_page_content">
          <div className="intro_text">
            <h3>Hi, I'm Ghanath Vootukuru</h3>
            <p>This would be the landing page with a short description!</p>
          </div>
        </section>

        <section className="quick_links">
          <QuickLinks />
        </section>
      </div>
    </>
  );
};

export default Home;
