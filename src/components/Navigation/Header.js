import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "./../context/ThemeContext.js";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        theme === "light" ? "bg-light" : "bg-dark"
      } bg-light sticky-top shadow-sm`}
    >
      <div className="container-fluid px-4">
        <Link className="navbar-brand" to="/">
          SkyScribe
        </Link>

        <div className="form-check form-switch theme-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onChange={toggleTheme}
          />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span
            className={`navbar-toggler-icon ${
              theme === "dark" ? "custom-toggler-white" : "custom-toggler-black"
            }`}
          ></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <div className="d-flex justify-content-center align-items-center gap-3 ms-auto">
            <ul className="navbar-nav gap-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/features">
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/howItWorks">
                  How it works?
                </NavLink>
              </li>
              <button
                className={`btn ${
                  theme === "light" ? "btn-outline-dark" : "btn-outline-light"
                }`}
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className={`btn ${
                  theme === "light" ? "btn-outline-dark" : "btn-outline-light"
                }`}
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
