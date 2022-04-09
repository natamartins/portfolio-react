import React, { Component } from "react";

import "../assets/style/style.css";

class Cardlink extends Component {
  render() {
    return (
      <>
        <a
          href={this.props.linkPag}
          target="_blank"
          className="linkPags"
          rel="noreferrer"
        >
          {this.props.text}
        </a>
      </>
    );
  }
}

export default Cardlink;
