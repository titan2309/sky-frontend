import { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactSupport = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6">
            <div className="contactus-container">
              <h2 className="mb-4 contactus-heading">Contact Us</h2>
              <p className="mb-4 contactus-subheading">
                Have questions or feedback? Reach out to us below.
              </p>
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label contact-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="name"
                    placeholder="Your full name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label contact-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control contact-input"
                    id="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label contact-label">
                    Message
                  </label>
                  <textarea
                    className="form-control contact-input"
                    id="message"
                    rows="5"
                    placeholder="Type your message here..."
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className={`btn ${
                      theme === "light" ? "btn-dark" : "btn-light"
                    }`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            <div className="support-container">
              <h2 className="mb-4 support-heading">Support</h2>
              <p className="mb-4 support-subheading">
                Need help? We're here for you. Use the resources below or reach
                out directly.
              </p>
              <ul className="list-group mb-4">
                <li className="list-group-item">
                  <strong>Email Support:</strong> support@skyscribe.app
                </li>
                <li className="list-group-item">
                  <strong>Help Center:</strong> <Link to="/faq">View FAQs</Link>
                </li>
                <li className="list-group-item">
                  <strong>Community Forum:</strong> Coming soon!
                </li>
              </ul>
              <p className="support-subheading-1">
                For urgent issues, please use the "Contact Us" form and select
                “Urgent” as the subject.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </motion.div>
  );
};

export default ContactSupport;
