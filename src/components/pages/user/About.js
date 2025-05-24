import React, { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext.js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container-fluid about-container">
          <div className="about-row">
            <h2 className="about-heading">About SkyScribe</h2>
            <p className="about-subheading">
              SkyScribe is a modern web-based writing and note-taking app built
              for thinkers, creators, and everyday users who value clarity,
              speed, and focus.
            </p>
          </div>
        </div>
        <section className="about-content">
          <div className="row about-content-row">
            <div className="col-md-6 about-content-col">
              <div className="card about-content-card">
                <h4 className="about-content-heading">Our Mission</h4>
                <p className="about-content-subheading">
                  SkyScribe was born from the idea that writing tools should
                  help you think—not slow you down. Whether you're jotting down
                  notes, planning a novel, or organizing your thoughts,
                  SkyScribe provides a distraction-free space with the right
                  balance of simplicity and power.
                </p>
              </div>
            </div>

            <div className="col-md-6 about-content-col">
              <div className="card about-content-card">
                <h4 className="about-content-heading">How It Started</h4>
                <p className="about-content-subheading">
                  Built as a personal project by a passionate full-stack
                  developer, SkyScribe blends modern web technologies with
                  practical features writers truly need. This project began as
                  an experiment—now it's a tool used by people who value clean
                  interfaces, autosaving, and markdown magic.
                </p>
              </div>
            </div>

            <div className="col-md-6 about-content-col">
              <div className="card about-content-card">
                <h4 className="about-content-heading">
                  What Makes SkyScribe Different?
                </h4>
                <ul>
                  <li className="about-content-subheading">
                    Beautifully minimal, responsive UI
                  </li>
                  <li className="about-content-subheading">
                    AI-assisted writing (coming soon)
                  </li>
                  <li className="about-content-subheading">
                    Real-time autosave & offline support
                  </li>
                  <li className="about-content-subheading">
                    Organized with tags and folders
                  </li>
                  <li className="about-content-subheading">
                    Open to ideas, feedback, and growth
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 about-content-col">
              <div className="card about-content-card">
                <h4 className="about-content-heading">From the Developer</h4>
                <p className="about-content-subheading">
                  “Hi, I'm Hardik. I built SkyScribe to solve a problem I faced
                  daily: needing a fast, reliable, and elegant tool for
                  capturing thoughts. It’s still evolving—and I’d love to hear
                  what <i>you</i> think. Let's build a better writing space
                  together. One day at a time”
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                className={`btn ${
                  theme === "light" ? "btn-outline-dark" : "btn-outline-light"
                }`}
                onClick={() => navigate("/contactUs")}
              >
                Send Feedback
              </button>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default About;
