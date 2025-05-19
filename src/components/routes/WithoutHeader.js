import React, { Children } from "react";
import Footer from "../Navigation/Footer";

const WithoutHeader = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default WithoutHeader;
