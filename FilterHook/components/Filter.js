import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Filter.css";
import List from "./List ";
import Controls from "./Controls ";

const Filter = (props) => {
  const { textInput, setTextInput } = useState("");
  const { isSort, setIsSort } = useState(false);
  const sortArr = (EO) => {
    () => setIsSort(true);
    console.log(textInput);
  };
  const filterArr = (EO) => {
    () => setTextInput(EO.target.value);
  };
  const resetFn = () => {
    () => setTextInput("");
    () => setIsSort(false);
  };
  let typeCheckbox = { class: "checkbox", type: "checkbox", checked: isSort, onClick: sortArr };
  let typeText = { class: "textInput", type: "text", value: textInput, onChange: filterArr };
  let typeButton = { class: "button", type: "button", defaultValue: "Сброс", onClick: resetFn };

  return (
    <div className="Filter">
      <Controls controlOptions={typeCheckbox} />
      <Controls controlOptions={typeText} />
      <Controls controlOptions={typeButton} />

      <List string={props.string} />
    </div>
  );
};

Filter.propTypes = {
  string: PropTypes.array.isRequired,
};

export default Filter;
