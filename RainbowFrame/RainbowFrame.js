"use strict";

import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./RainbowFrame.css";

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  state = {
    component: "",
  };

  componentDidMount() {
    let arr = [];
    this.props.colors.forEach((color, index) => {
      arr.push(
        <div className="border" key={index} style={{ borderColor: color }}>
          {arr.pop()}
          {index === 0 && this.props.children}
        </div>
      );
    });
    this.setState({ component: arr });
  }

  render() {
    return <div className="RainbowFrame">{this.state.component}</div>;
  }
}
export default RainbowFrame;
