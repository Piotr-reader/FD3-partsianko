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

  pressed1 = () => {
    this.props.cbPressed(1);
  };
  pressed2 = () => {
    this.props.cbPressed(2);
  };

  componentDidMount() {
    // console.log("mount");
  }
  componentDidUpdate() {
    console.log("didupdate");
  }
  shouldComponentUpdate(oldProp, newProp) {
    console.log("shouldupdate");
    // if (oldProp !== newProp) {
    //   return true;
    // }
    return false;
  }
  render() {
    return (
      <div className="DoubleButton">
        <input className="input" type="button" value={this.props.caption1} onClick={this.pressed1} />
        {this.props.children}
        <input className="input" type="button" value={this.props.caption2} onClick={this.pressed2} />
      </div>
    );
  }
}
export default DoubleButton;
