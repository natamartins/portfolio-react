import React from "react";

import "../assets/style/style.css";

const Cardlink = (props) => {

  return (
    <>
      <a
        href={props.linkPag}
        target="_blank"
        className="linkPags"
        rel="noreferrer"
      >
        {props.text}
      </a>
    </>
  );
}

export default Cardlink;
