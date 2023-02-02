import React from "react";
import PropTypes from "prop-types";

import "./List.css";

const List = (props) => {
  return (
    <div className="List">
      <textarea className="text" value={props.string.join("\n")} onChange={() => {}} />
    </div>
  );
};

List.propTypes = {
  string: PropTypes.array.isRequired,
};

export default List;
