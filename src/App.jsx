import React,{ useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themer";
// ........
import Home from "./components/Home";
import Main from "./components/Hero";
import Bio from "./components/Bio";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
import MyProject from "./components/MyProject";
import Slider from "./components/Sliders";
// .......
import "./assets/style/style.css";
import ImgDark from './assets/img/icones/dark-mode.png'
// ......
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
//........
function App() {
   fetch(process.env.REACT_APP_API_URL || 'http://localhost:3000/api/v1')
   .then(() => console.log('DEU CERTO'))
   .catch(() => console.log('DEU ERRO'))


  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
      <button className='butao-fixos'  onClick={() => themeToggler()}>
       <img src={ImgDark} alt="Modo Darck" className='imgDarck' />
      </button>
      <Home  />
      <Main />
      <Bio />
      <Slider/>
      <About />
      <MyProject />
      <Experience />
      <Project />
      <Footer />
      {/* <ButaoFixo/> */}
      </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
