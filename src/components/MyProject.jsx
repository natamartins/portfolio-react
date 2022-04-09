import React, { Component } from "react";
import Card from "./Card";

import Img01 from "../assets/img/img-MyProject/image 1.png";
import Img02 from "../assets/img/img-MyProject/image 2.png";
import Img03 from "../assets/img/img-MyProject/image 3.png";
import Img04 from "../assets/img/img-MyProject/image 4.png";
import Cardlink from "./CardLink";

class MyProject extends Component {
  render() {
    return (
      <>
        <div className="containerMyProject" id="projetos">
          <section className="myproject-backgroun">
            <div className="MyProject-container-text">
              <h1>Meus Projetos</h1>
              <h2>Destaques.</h2>
            </div>
            <div className="MyProject-container">
              <Card
                img={Img01}
                link01={"https://natamartins.github.io/webNFT/"}
                link02={"https://github.com/natamartins/webNFT"}
                conteudo=" descubra averdadeira arte digital e colecione diversos NFTs"
              />
              <Card
                img={Img02}
                link01={"https://natamartins.github.io/FlexBlog/#"}
                link02={"https://github.com/natamartins/FlexBlog"}
                conteudo="Projeto desenvolvido atravez do curso para desenvolver minhas habilidades com código "
              />
              <Card
                img={Img03}
                link01={"https://natamartins.github.io/Carros/"}
                link02={"https://github.com/natamartins/Carros"}
                conteudo=" Meus Primeiro Projeto Criado usando meu conhecimento no inicio dos meus estudos."
              />
              <Card
                img={Img04}
                link01={"https://natamartins.github.io/bikcraft-projetofinal/"}
                link02={"https://github.com/natamartins/bikcraft-projetofinal"}
                conteudo="esse é um Projeto completo faltando apenas a parte do backend "
              />
            </div>
            <section className="MyProject-container-text">
              <h1>Página de todos os Projetos</h1>
              <div>
                <h2>Avançados</h2>
                <Cardlink
                  linkPag="https://natamartins.github.io/site.teste/#"
                  text="Wildbest"
                />
                <Cardlink
                  linkPag="https://natamartins.github.io/space/"
                  text="Space"
                />
                <Cardlink
                  linkPag="https://natamartins.github.io/Mcdonalds/"
                  text="McDonald's"
                />
                <Cardlink
                  linkPag="https://natamartins.github.io/Calculadora/"
                  text="Calculadora"
                />
                <Cardlink
                  linkPag="https://natamartins.github.io/projeto-Nike/"
                  text="Nike Shoes"
                />
                <h2>iniciantes</h2>
                <Cardlink
                  linkPag="https://natamartins.github.io/Bank/"
                  text="Bank"
                />
                <Cardlink
                  linkPag="https://natamartins.github.io/wolf/"
                  text="Wolf"
                />
                <Cardlink
                  linkPag="https://natamartins.github.io/violao/"
                  text="Song"
                />
                <Cardlink
                  linkPag=" https://natamartins.github.io/CodeHelp.oficial/"
                  text="Code Help BR"
                />
              </div>
            </section>
          </section>
        </div>
      </>
    );
  }
}

export default MyProject;
