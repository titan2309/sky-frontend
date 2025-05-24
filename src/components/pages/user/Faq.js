import React from "react";
import { motion } from "framer-motion";

const Faq = () => {
  const faqs = [
    {
      question: "Is SkyScribe free to use?",
      answer:
        "Yes! SkyScribe is completely free for personal use with no ads or hidden charges.",
    },
    {
      question: "Can I use SkyScribe offline?",
      answer:
        "Absolutely. SkyScribe uses local storage and syncs automatically when you're online.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Your notes are saved on your device and can be synced securely across your account. We don’t sell or share your data.",
    },
    {
      question: "How do I organize my notes?",
      answer:
        "You can tag notes and organize them into folders for easy access.",
    },
  ];

  return (
    <>
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{duration: 1}}
          >
        <div className="container py-5 faq-container">
          <h2 className="mb-4 faq-heading">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <hr />
    </>
  );
};

export default Faq;
