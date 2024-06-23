import React from "react";
import "./container.css";

const Container = (props) => {
  return (
    <>
      <div className="flex_col_2">
        {props.input.map((item) => (
          <div key={item.id} className="flex_col_2">
            {/* PROJECT DETAILS START*/}
            {item.projectTitle ? (
              <div>
                <h3 className="h3">
                  {item.projectTitle} | <span>{item.duration}</span>
                </h3>
                <p className="detials_para">{item.description}</p>
                <ul>
                  {item.details.map((detial, index) => (
                    <li className="list_item" key={index}>
                      {detial}
                    </li>
                  ))}
                </ul>
                <div>
                  {item.demo || item.code ? (
                    <div className="buttons_container">
                      {item.demo && (
                        <a href="" className="button">
                          Demo
                        </a>
                      )}
                      {item.code && (
                        <a href="" className="button">
                          Code
                        </a>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
            {/* PROJECT DETAILS END*/}

            {/* INTRo DETAILS START*/}
            {item.inputPara ? <p>{item.inputPara}</p> : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default Container;
