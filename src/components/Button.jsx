import React from "react";

import "../assets/style/style.css";

const Button = (props) => {
  return (
    <a
      href={props.link || undefined}
      className="button-componente"
      style={props.customStyle}
    >
      {props.texto}
    </a>
  );
};
export default Button;
