import React from "react";
import PropTypes from "prop-types";

import "./BR2JSX.css";

class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  render() {
    const changeString = this.props.text
      .replace(/<br.?\/>/g, " ")
      .replace(/<br>/g, " ")
      .split(" ");

    console.log(changeString);
    return <div className="BR2JSX">{changeString}</div>;
  }
}
export default BR2JSX;
