import React from "react";
import PropTypes from "prop-types";

import "./Controls.css";
const Controls = (props) => {

  return (
    <input
      className={props.controlOptions.class}
      type={props.controlOptions.type}
      value={props.controlOptions.value}
      checked={props.controlOptions.checked}
      defaultValue={props.controlOptions.defaultValue}
      onClick={props.controlOptions.onClick}
      onChange={props.controlOptions.onChange}
      ref={props.controlOptions.ref}
    />
  );
};
Controls.propTypes = {
  controlOptions: PropTypes.object,
};

export default Controls;
