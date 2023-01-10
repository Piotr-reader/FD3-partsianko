"use strict";

import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./RainbowFrame.css";

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
  };
  state = {
    component: "",
  };

  componentDidMount() {
    let arr = [];
    this.props.colors.forEach((color, index) => {
      arr.push(
        <div className="border" key={index} style={{ borderColor: color }}>
          {index === this.props.colors.length - 1 && this.props.text}
        </div>
      );
    });
    let popElement = arr.pop();
    let cloned = {};
    for (let i = arr.length; i > 0; i--) {
      cloned = React.cloneElement(arr[i - 1], { children: popElement });
      popElement = cloned;
      arr.pop();
    }
    this.setState({ component: cloned });
  }

  render() {
    return <div className="RainbowFrame">{this.state.component}</div>;
  }
}
export default RainbowFrame;
