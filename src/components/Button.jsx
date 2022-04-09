import React, { Component } from "react";

import "../assets/style/style.css";

class Button extends Component {
  render() {
    return (
      <a
        href={this.props.link || undefined}
        className="button-componente"
        style={this.props.customStyle}
      >
        {this.props.texto}
      </a>
    );
  }
}

export default Button;
