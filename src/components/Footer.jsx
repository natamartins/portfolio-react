import React from "react";
import "../assets/style/style.css";
import Nav from "./Nav";
import LogoN from "../assets/img/logo-n.webp";
const Footer = (props) => {
  return (
    <>
      <footer>
        <div className="contaier-footer">
          <img src={LogoN} alt="logo com a letra N" className="logo-N" />
          <Nav />
        </div>
      </footer>
    </>
  );
};

export default Footer;
