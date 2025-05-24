import React, { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext.js";

const Support = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Support</h2>
      <p className="mb-4">
        Need help? We're here for you. Use the resources below or reach out
        directly.
      </p>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          <strong>Email Support:</strong> support@skyscribe.app
        </li>
        <li className="list-group-item">
          <strong>Help Center:</strong> <a href="/faqs">View FAQs</a>
        </li>
        <li className="list-group-item">
          <strong>Community Forum:</strong> Coming soon!
        </li>
      </ul>
      <p>
        For urgent issues, please use the <a href="/contact">Contact Us</a> form
        and select “Urgent” as the subject.
      </p>
    </div>
  );
};

export default Support;
