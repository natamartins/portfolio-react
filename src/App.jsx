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
   fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
   .then(() => console.log('DEU CERTO'))
   .catch(() => console.log('DEU ERRO'))

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
