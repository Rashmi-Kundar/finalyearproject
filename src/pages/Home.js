import React from "react";
import "./home.scss";
import Login from "./Login";

const Home = () => {
  return (
    <>
      <div
        style={{ boxShadow: "5px 5px 5px grey" }}
        className="container-fluid"
      >
        <div className="row justify-content-center align-items-center homerow">
          <div className="col-md-8 homecol text-center">
            <h1 className="bigtext">
              <span className="greentext">The ultimate purpose of </span> <br />{" "}
              collecting the data <br /> is to provide a basis for <br /> action
              or a recommendation
            </h1>
          </div>
        </div>

        <div className="row align-items-center  justify-content-evenly secondrow">
          <div className="col-md-3 secondrowchilds text-center">
            <h2 className="recheadings">
              Transportation <br /> Recommedation
            </h2>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, et
              animi. Tenetur, voluptates error ex cum tempora quam deserunt
              voluptatum consequatur. Impedit nihil laudantium at dignissimos
              provident sint soluta nulla.
            </h6>
          </div>
          <div className="col-md-3 secondrowchilds text-center">
            <h2 className="recheadings">
              {" "}
              Restaurant <br /> Recommedation
            </h2>

            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, et
              animi. Tenetur, voluptates error ex cum tempora quam deserunt
              voluptatum consequatur. Impedit nihil laudantium at dignissimos
              provident sint soluta nulla.
            </h6>
          </div>
          <div className="col-md-3 secondrowchilds text-center">
            <h2 className="recheadings">
              {" "}
              College <br /> Recommedation
            </h2>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, et
              animi. Tenetur, voluptates error ex cum tempora quam deserunt
              voluptatum consequatur. Impedit nihil laudantium at dignissimos
              provident sint soluta nulla.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
