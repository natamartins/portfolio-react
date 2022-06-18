import React from "react";

import "../assets/style/style.css";

const Card = ({conteudo, link01, link02,img , text}) => {
  return (
    <>
      <div className="card-myproject">
        <div className="card-01">
          <h2>{text}</h2>
          <p>{conteudo}</p>
          <div className="card-links">
            <a href={link01} target="_blank" rel="noreferrer">
              Pagina do site
            </a>
            <a href={link02} target="_blank" rel="noreferrer">
              Link do Github
            </a>
          </div>
        </div>
        <div className="card-02">
          <img src={img} alt="imagens dos meus projetos" />
        </div>
      </div>
    </>
  );
}
export default Card;
