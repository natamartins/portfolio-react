import React from "react";

import Home from "./components/home";
import Main from "./components/hero";
import Bio from "./components/Bio";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/project";
import Footer from "./components/Footer";
import MyProject from "./components/MyProject";

function App() {
  return (
    <>
      <Home />
      <Main />
      <Bio />
      <About />
      <MyProject />
      <Experience />
      <Project />
      <Footer />
    </>
  );
}

export default App;
