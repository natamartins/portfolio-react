import React from "react";

import "../assets/style/style.css";

import Button from "./Button";

const Nav = () => {
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

export default Nav;
