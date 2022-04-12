import React from "react";

import "../assets/style/style.css";

const Card = (props) => {
  return (
    <>
      <div className="card-myproject">
        <div className="card-01">
          <h2>Web NFT </h2>
          <p>{props.conteudo}</p>
          <div className="card-links">
            <a href={props.link01} target="_blank" rel="noreferrer">
              Pagina do site
            </a>
            <a href={props.link02} target="_blank" rel="noreferrer">
              Link do Github
            </a>
          </div>
        </div>
        <div className="card-02">
          <img src={props.img} alt="imagens dos meus projetos" />
        </div>
      </div>
    </>
  );
}
export default Card;
