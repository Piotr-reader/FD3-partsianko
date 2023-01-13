import React from "react";
import PropTypes from "prop-types";

import "./BR2JSX.css";

class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  render() {
    let arr = [];
    this.props.text.split(/<br\s?\/?>/g).forEach((item, index) => {
      arr.push(item);
      arr.push(<br key={index} />);
    });
    arr.pop();
    return <div className="BR2JSX">{arr}</div>;
  }
}
export default BR2JSX;
