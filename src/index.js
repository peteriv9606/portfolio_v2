import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./components/Navigation";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Skillset from "./components/Skillset";
import About from "./components/About";
import Contact from "./components/Contact";

import "./style.css";
ReactDOM.render(
  <React.Fragment>
    <Navigation />
    <Home />
    <Projects />
    <Skillset />
    <About />
    <Contact />
  </React.Fragment>,
  document.getElementById("root")
);
