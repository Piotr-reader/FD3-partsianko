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
    text: "",
  };
  componentDidMount() {
    let text = this.props.children;
    for (let color of this.props.colors) {
      text = (
        <div className="border" style={{ borderColor: color }}>
          {text}
        </div>
      );
    }
    this.setState({ text });
  }
  render() {
    return <div className="RainbowFrame">{this.state.text}</div>;
  }
}
export default RainbowFrame;
