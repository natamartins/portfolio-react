import React from "react";

import Icone01 from "../assets/img/icones/html.png";
import Icone02 from "../assets/img/icones/css.png";
import Icone03 from "../assets/img/icones/science.png";
import Icone04 from "../assets/img/icones/javascript.png";
import Icone05 from "../assets/img/icones/paint-palette.png";

const Experience = () => {
  return (
    <>
      <section id="conhecimento">
        <div className="container-experience">
          <div className="mySkils">
            <h1>
              Minhas <br /> Habilidades
            </h1>
          </div>
          <ul className="experience-list">
            <li>
              <img src={Icone01} alt="imagem html" />
              <p> html</p>
            </li>
            <li>
              <img src={Icone02} alt="imagem css" />
              <p>css </p>
            </li>
            <li>
              <img src={Icone03} alt="imagem React" />
              <p> React</p>
            </li>
            <li>
              <img src={Icone04} alt="imagem JavaScript" />
              <p>JavaScript</p>
            </li>
            <li>
              <img src={Icone05} alt="imagem designer" />
              <p> UI/UX Desingner</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Experience;
