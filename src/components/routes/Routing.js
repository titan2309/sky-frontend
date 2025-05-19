import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullLayout from "./FullLayout";
import Home from "../pages/user/Home";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FullLayout>
                <Home />
              </FullLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
