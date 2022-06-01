import React from "react";
import Cardlink from "./CardLink";

const MyProject = () => {
  return (
    <>
      <div className="containerMyProject" id="projetos">
        <section className="myproject-backgroun">
         
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
export default MyProject;
