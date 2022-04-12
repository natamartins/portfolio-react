import React from "react";

import "../assets/style/style.css";

import FogoImg from "../assets/img/icones/fogo.png";

import Button from "./Button";

const Project = () => {
  const Style = {
    color: "black",
    backgroundColor: "white",
    padding: "10px 25px",
    borderRadius: "5px",
    border: "none",
  };

  return (
    <>
      <section className="box-project">
        <div className="container-project">
          <img src={FogoImg} alt="logo de um Emoji de fogo" />
          <h2>Precisa de um Projeto? Vamos Conversar</h2>
          <p>
            Ainda está amadurecendo sua ideia de negócio? Sem problemas! Posso
            te ajudar também 😉
          </p>
          <Button
            customStyle={Style}
            texto="Entre em Contato"
            link="mailto:natacodedev@gmail.com"
          />
        </div>
      </section>
    </>
  );
}

export default Project;
