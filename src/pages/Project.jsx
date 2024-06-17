import React from "react";
import NavBar from "../components/NavBar";
import Container from "../components/Container";

const input = [
  {
    id: "1",
    para: "PROJECT:Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fuga dolore praesentium debitis placeat, ea quo, quasi autem omnis laudantium eius reiciendis sapiente. Non consequatur quae, ducimus amet quam porro!",
  },
  {
    id: "2",
    para: "PROJECT:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem ipsum rem dolor repudiandae delectus. Rem quidem, officia odit pariatur eligendi sunt deserunt omnis ut tenetur laborum reiciendis magnam impedit et obcaecati voluptatum, voluptate voluptatem ipsum placeat repellendus commodi eum ad tempora voluptates. Distinctio magni, molestias fugit aliquid assumenda nobis repellat! Optio porro delectus dolorum architecto labore voluptatum similique possimus quaerat ducimus at laudantium, quisquam, libero alias. Consequuntur repellendus delectus, illum, animi fuga quos repellat laudantium numquam fugiat illo dignissimos.",
  },
  {
    id: "3",
    para: "PROJECT:Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente rem corporis praesentium laborum. Vitae nemo earum libero unde ex.",
  },
];

const Project = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <section className="container">
        <div className="container_content">
          <h2 className="h2">Project</h2>
          <img src="" alt="A sample project image would be here" />
          <Container input={input} />
        </div>
      </section>
    </>
  );
};

export default Project;
