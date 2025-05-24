import React, { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext.js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Features = () => {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container-fluid">
          <div className="features-container">
            <h2 className="features-heading">Features That Empower Writers</h2>
            <p className="features-subheading">
              SkyScribe offers a thoughtful balance of minimalism and powerful
              tools—designed to help you focus, organize, and create
              effortlessly.
            </p>
          </div>
        </div>
        <section className="features-content-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 features-col">
                <div className="card features-card">
                  <h5 className="features-card-heading">
                    Distraction-Free Writing
                  </h5>
                  <p className="features-card-subheading">
                    A clean, focused interface with no clutter—just you and your
                    thoughts.
                  </p>
                </div>
              </div>

              <div className="col-md-4 features-col">
                <div className="card features-card">
                  <h5 className="features-card-heading">Real-Time Autosave</h5>
                  <p className="features-card-subheading">
                    Your work is always safe. Changes are saved as you type—even
                    offline.
                  </p>
                </div>
              </div>

              <div className="col-md-4 features-col">
                <div className="card features-card">
                  <h5 className="features-card-heading">Markdown Support</h5>
                  <p className="features-card-subheading">
                    Write with powerful formatting using simple markdown syntax.
                  </p>
                </div>
              </div>

              <div className="col-md-4 features-col">
                <div className="card features-card">
                  <h5 className="features-card-heading">Tags & Folders</h5>
                  <p className="features-card-subheading">
                    Stay organized with flexible tagging and folder management.
                  </p>
                </div>
              </div>

              <div className="col-md-4 features-col">
                <div className="card features-card">
                  <h5 className="features-card-heading">Responsive Design</h5>
                  <p className="features-card-subheading">
                    Write from desktop, tablet, or mobile with a beautifully
                    adaptive layout.
                  </p>
                </div>
              </div>

              <div className="col-md-4 features-col">
                <div className="card features-card">
                  <h5 className="features-card-heading">
                    Dark Mode / Light Mode
                  </h5>
                  <p className="features-card-subheading">
                    Choose your writing environment—light for clarity, dark for
                    focus.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                className={`btn ${
                  theme === "light" ? "btn-outline-dark" : "btn-outline-light"
                }`}
                onClick={() => navigate("/login")}
              >
                Try SkyScribe Now
              </button>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Features;
