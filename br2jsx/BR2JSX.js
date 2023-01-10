import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./BR2JSX.css";
import { div } from "react-dom-factories";
class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  render() {
    return <div>{this.props.text}</div>;
  }
}
export default BR2JSX;
