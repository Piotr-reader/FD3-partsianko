import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Filter.css";
import List from "./List ";
import Controls from "./Controls ";

const Filter = (props) => {
  const [text, setText] = useState(props.string.slice());

  return (
    <div className="Filter">
      <div className="btns">
        <Controls string={props.string} cbSetText={setText} />
      </div>
      <List string={text} />
    </div>
  );
};

Filter.propTypes = {
  string: PropTypes.array.isRequired,
};

export default Filter;
