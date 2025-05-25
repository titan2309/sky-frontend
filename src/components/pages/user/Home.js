import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { ThemeContext } from "../../context/ThemeContext";
import FeatureCards from "./FeatureCards";
import { motion } from "framer-motion";
import Metrics from "./Metrics";
import Newsletter from "./Newsletter";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="container hero-container">
            <h1 className="hero-heading py-1">
              <span className="hero-head-1">Welcome to</span>{" "}
              <span className="text-light">SkyScribe</span>
            </h1>
            <h5 className="hero-subheading py-1 hero-subhead-1">
              <Typewriter
                words={[
                  "Capture your thoughts, beautifully.",
                  "Organize ideas. Anytime. Anywhere.",
                  "Minimal. Powerful. Distraction-free writing.",
                  "Where every word finds its place.",
                  "Your personal cloud-based notebook.",
                  "Ideas begin here.",
                  "Write more. Worry less.",
                  "Made for writers. Loved by thinkers.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h5>
            <div className="py-1">
              <Link to="/register">
                <button
                  className={`btn ${
                    theme === "light" ? "btn-outline-dark" : "btn-outline-light"
                  } me-2`}
                >
                  Get Started
                </button>
              </Link>
              <Link to="/about">
                <button
                  className={`btn ${
                    theme === "light" ? "btn-outline-dark" : "btn-outline-light"
                  }`}
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* MINI-FEATURE */}

        <section className="mini-feature-section">
          <div className="container-fluid mini-feature-container">
            <div className="row ">
              <FeatureCards />
            </div>
          </div>
        </section>

        {/* METRICS */}

        <section className="metrics-section">
          <div className="container text-center">
            <div className="row d-flex justify-content-center align-items-center">
              <Metrics />
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}

        <section className="newsletter-section">
          <div className="container">
            <div className="row">
              <Newsletter />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
