import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container footer-container">
        <div>
          <div className="row">
            <div className="col-md-6 p-2">
              <h3 className="footer-brand">SkyScribe</h3>
              <p className="footer-subhead">Ideas come to life here!</p>
            </div>
            <div className="col-md-2 p-2">
              <Link className="footer-heads" to="/about">
                <p>About</p>
              </Link>
              <Link className="footer-heads" to="/features">
                <p>Features</p>
              </Link>
              <Link className="footer-heads" to="/contactUs">
                <p>Contact Us</p>
              </Link>
            </div>
            <div className="col-md-2 p-2">
              <Link className="footer-heads">
                <p>FAQ</p>
              </Link>
              <Link className="footer-heads">
                <p>Support</p>
              </Link>
            </div>
            <div className="col-md-2 p-2">
              <Link className="footer-heads">
                <p>X(Twitter)</p>
              </Link>
              <Link className="footer-heads">
                <p>Instagram</p>
              </Link>
              <Link className="footer-heads">
                <p>YouTube</p>
              </Link>
            </div>
          </div>
          <div className="footer-copyright">
            <p className="footer-subhead text-center">
              &copy; 2025 SkyScribe. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
