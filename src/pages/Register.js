import React from "react";
import "./register.scss";
import register from "../images/register.jpg";

const Register = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row RegisterMainrow justify-content-center align-items-center ">
          <div className="col-md-9 col__9">
            <h1 className="text-center registerheading">Register</h1>
            <div className="row justify-content-center align-items-center secondRow">
              <div className="col-md-4 imagecontainer">
                <img className="image-fluid" src={register} alt="" />
              </div>
              <div className="col-md-4 registercontainer ">
                <form action="">
                  <label htmlFor="name">Name:</label>
                  <br />
                  <input placeholder="Enter the name" id="name" type="text" />
                  <br />
                  <label htmlFor="email">Email:</label>
                  <br />
                  <input
                    placeholder="Enter the email"
                    id="email"
                    type="email"
                  />
                  <br />
                  <label htmlFor="pass">Password:</label>
                  <br />
                  <input
                    placeholder="Enter the password"
                    id="pass"
                    type="password"
                  />
                  <br />
                  <label htmlFor="phone">Phone:</label>
                  <br />
                  <input
                    placeholder="Enter the number"
                    id="phone"
                    type="number"
                  />
                  <br />
                  <button type="button" class="btn btn-outline-primary">
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
