import React from "react";

import Nav from "./Nav";

import LogoN from "../assets/img/logo-n.webp";

import "../assets/style/style.css";

const Home = () => {
  return (
    <>
      <header className="container-header">
        <div className="box-container">
          <img
            src={LogoN}
            alt="minha foto de perfil do portfolio"
            className="logo-N"
          />
          <Nav />
        </div>
      </header>
    </>
  );
}
export default Home;
