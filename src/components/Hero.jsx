import React, { Component } from "react";

import Portfolio from "../assets/img/myphoto.jfif";

import SocialMedia from "./SocialMedia";

import "../assets/style/style.css";

class Main extends Component {
  render() {
    return (
      <>
        <main className="box-main">
          <div className="container-main">
            <section className="box-sectio01">
              <div className="box-sectio01-div">
                <h1>
                  Desenvolvedor Frontend
                  <span className="style-h1-main">UI/UX Designer</span>
                </h1>
              </div>
              <p>Localizado em Belo Horizonte /</p>
              <SocialMedia />
            </section>
            <section className="box-sectio02">
              <img src={Portfolio} alt="minha foto de perfil do portfolio" />
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
