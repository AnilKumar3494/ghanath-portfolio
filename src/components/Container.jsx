import React from "react";
import "./container.css";

const Container = (props) => {
  return (
    <>
      <div className="container_text">
        {props.input.map((item) => (
          <div key={item.id} className="container_text">
            <p>{item.para}</p>
            {item.demo && item.code ? (
              <div className="button_container">
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Demo
                </a>
                <a
                  href={item.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Code
                </a>
              </div>
            ) : item.demo ? (
              <div>
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Demo
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default Container;
