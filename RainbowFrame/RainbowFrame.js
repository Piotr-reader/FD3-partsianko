"use strict";

import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./RainbowFrame.css";

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  render() {
    let component = {};
    let nestedComponent = this.props.children;
    this.props.colors.forEach((color, index) => {
      component = (
        <div className="border" key={index} style={{ borderColor: color }}>
          {nestedComponent}
        </div>
      );
      nestedComponent = component;
    });
    return <div className="RainbowFrame">{component}</div>;
  }
}
export default RainbowFrame;
