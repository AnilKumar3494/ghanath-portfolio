import React from "react";
import "./container.css";

const Container = (props) => {
  return (
    <div className="container_text">
      {props.input.map((item) => (
        <p key={item.id}>{item.para}</p>
      ))}
    </div>
  );
};

export default Container;
