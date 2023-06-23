import React from "react";
import "./login.scss";
import login from "../images/login.jpg";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row RegisterMainrow justify-content-center align-items-center ">
          <div className="col-md-9 col__9">
            <h1 className="text-center registerheading">Login</h1>
            <div className="row justify-content-center align-items-center secondRow">
              <div className="col-md-4 imagecontainer">
                <img className="image-fluid" src={login} alt="" />
              </div>
              <div className="col-md-4 registercontainer ">
                <form action="">
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

                  <button type="button" class="btn btn-outline-primary">
                    Login
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

export default Login;
