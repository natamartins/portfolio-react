import React, { Component } from "react";

import "../assets/style/style.css";

class Card extends Component {
  render() {
    return (
      <>
        <div className="card-myproject">
          <div className="card-01">
            <h2>Web NFT </h2>
            <p>{this.props.conteudo}</p>
            <div className="card-links">
              <a href={this.props.link01} target="_blank" rel="noreferrer">
                Pagina do site
              </a>
              <a href={this.props.link02} target="_blank" rel="noreferrer">
                Link do Github
              </a>
            </div>
          </div>
          <div className="card-02">
            <img src={this.props.img} alt="imagens dos meus projetos" />
          </div>
        </div>
      </>
    );
  }
}

export default Card;