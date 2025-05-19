import React from "react";
import Header from "../Navigation/Header";

const WithoutFooter = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default WithoutFooter;
