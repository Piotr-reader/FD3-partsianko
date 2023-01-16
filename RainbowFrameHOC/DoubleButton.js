"use strict";

import React from "react";
import PropTypes from "prop-types";
import "./DoubleButton.css";

class DoubleButton extends React.Component {
  static propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func.isRequired,
  };

  numPressed = (EO) => {
    let num = "";
    if (EO.target.value === this.props.caption1) {
      num = 1;
    }
    if (EO.target.value === this.props.caption2) {
      num = 2;
    }
    this.props.cbPressed(num);
  };
  render() {
    return (
      <div className="DoubleButton">
        <input className="input" type="button" value={this.props.caption1} onClick={this.numPressed} />
        {this.props.children}
        <input className="input" type="button" value={this.props.caption2} onClick={this.numPressed} />
      </div>
    );
  }
}
export default DoubleButton;
