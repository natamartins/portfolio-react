import React, { Component } from "react";

import "../assets/style/style.css";

import Button from "./Button";

class Nav extends Component {
  render() {
    return (
      <>
        <div className="box-container-list">
          <Button texto="Home" link="#" />
          <Button texto="Projetos" link="#projetos" />
          <Button texto="Conhecimento" link="#conhecimento" />
        </div>
      </>
    );
  }
}

export default Nav;
