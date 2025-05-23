import React from "react";
import { FiEdit3, FiCloud } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";

const FeatureCards = () => {
  const features = [
    {
      icon: <FiEdit3 size={24} className="me-2" />,
      title: "Seamless Writing",
      description:
        "Focus on your thoughts without distractions. A minimal interface helps you write more and stress less.",
    },
    {
      icon: <FiCloud size={24} className="me-2" />,
      title: "Cloud-Synced",
      description:
        "Your notes are automatically saved and synced across devices using secure cloud storage.",
    },
    {
      icon: <MdSecurity size={24} className="me-2" />,
      title: "Secure & Private",
      description:
        "End-to-end encryption ensures your data is yours alone. No tracking, no ads—just secure note-taking.",
    },
  ];
  return (
    <>
      {features.map((item, index) => {
        return (
          <>
            <div className="col-md-4">
              <div className="card feature-card" key={index}>
                <div className="card-body text-center">
                  <h4 className="p-1">{item.icon}</h4>
                  <h5 className="p-1">{item.title}</h5>
                  <p className="p-1"> {item.description}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default FeatureCards;
