import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Newsletter = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="col-md-6 p-2">
        <h2 className="newsletter-heading">Stay Updated</h2>
        <p className="newsletter-subheading">
          Subscribe to our newsletter for writing tips, product updates, and
          exclusive offers.
        </p>
      </div>
      <div className="col-md-6 p-2">
        <div className="card newsletter-card">
          <div className="card-body">
            <form className="d-flex">
              <div className="w-100 me-2">
                <input
                  className="form-control newsletter-input shadow-sm"
                  type="email"
                  placeholder="Enter email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  className={`btn ${
                    theme === "light" ? "btn-outline-dark" : "btn-outline-light"
                  } newsletter-btn`}
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
