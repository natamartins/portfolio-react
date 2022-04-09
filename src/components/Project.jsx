import React, {Component} from 'react'

import "../assets/style/style.css";

import FogoImg from '../assets/img/fogo.png'
class Project extends Component {

  render() { 
    return (
      <>
        <section>
          <div  className='container-project'>
             <img src={FogoImg} alt="" />
             <h2>Precisa de um Projeto? vamos conversar.</h2>
             <p>mogfbpignbfigfisbffiv</p>
             <a href="#">Entre em Contao</a>
          </div>
        </section>
      </>
    );
  }
}
 
export default Project;