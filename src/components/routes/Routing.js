import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullLayout from "./FullLayout";
import Home from "../pages/user/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import WithoutFooter from "./WithoutFooter";
import About from "../pages/user/About";
import Features from "../pages/user/Features";
import HowItWorks from "../pages/user/HowItWorks";

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
          <Route
            path="/about"
            element={
              <FullLayout>
                <About />
              </FullLayout>
            }
          />
          <Route
            path="/features"
            element={
              <FullLayout>
                <Features />
              </FullLayout>
            }
          />
          <Route
            path="howItWorks"
            element={
              <FullLayout>
                <HowItWorks />
              </FullLayout>
            }
          />
          <Route
            path="/login"
            element={
              <WithoutFooter>
                <Login />
              </WithoutFooter>
            }
          />
          <Route
            path="/register"
            element={
              <FullLayout>
                <Register />
              </FullLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
