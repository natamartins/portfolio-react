import React, { Component } from "react";

import "../assets/style/style.css";

import Nav from "./nav";

import LogoN from "../assets/img/logo-n.webp";
import EmailImg from "../assets/img/marketing-de-email.png";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="contaier-footer">
          <div className="info-footer">
              <img src={EmailImg} alt="imagem logo para email" />
              <a href="mailto:natacodedev@gmail.com">
                nata.codedev@gmail.com
              </a>
            </div>
            <img src={LogoN} alt="logo com a letra N" className="logo-N" />
            <Nav />
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
