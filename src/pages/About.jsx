import React from "react";
import NavBar from "../components/NavBar";
import Container from "../components/Container";

const About = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <section className="container">
        <div className="container_content">
          <h2 className="h2">About</h2>
          <img src="" alt="A sample project image would be here" />
          {/* <Container /> */}
        </div>
      </section>
    </>
  );
};

export default About;
