import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div className="container-fluid ">
          <Link className="navbar-brand">SkyScribe</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarContent"
          >
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#heroSection">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#aboutSection">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#featuresSection">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#howItWorksSection">
                    How it works?
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span>
                <FaUser />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
