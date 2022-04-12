import React from "react";

import FrontImg from "../assets/img/Front-pessoa.png";

const About = (props) => {
  return (
    <>
      <section>
        <div className="container-About">
          <div className="About-box02">
            <img src={FrontImg} alt="imagens front end" />
          </div>
          <div className="About-box01">
            <p>
              Frontend é uma área da qual me adpto muito bem é gosto muito
              dessa profissão.
            </p>
            <p>
              Faço cursos onlines, Estudo bastante About todos os conceitos da
              programação e pratico a maior parte do tempo. Pois...
            </p>
            <p>“A pratica leva a perfeição”</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
