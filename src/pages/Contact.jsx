import React from "react";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import BgImg from "../components/BgImg";
import QuickLinks from "../components/QuickLinks";

const Contact = () => {
  return (
    <BgImg>
      <NavBar />

      <section className="container">
        <div className="container_content">
          <h2 className="h2">Contact</h2>
          {/* <img src="" alt="A sample project image would be here" /> */}
          {/* <Container /> */}
        </div>
      </section>

      <QuickLinks />
    </BgImg>
  );
};

export default Contact;
