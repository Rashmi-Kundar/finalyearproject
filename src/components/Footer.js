import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row justify-content-center text-center align-items-center">
            <div className="col-md-3">
              <h3>About Us</h3>
            </div>
            <div className="col-md-3">
              <h3>Contact Us</h3>
            </div>
            <div className="col-md-3">
              {" "}
              <h3>Notifications</h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
