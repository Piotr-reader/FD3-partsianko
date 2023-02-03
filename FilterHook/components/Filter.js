import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./Filter.css";
import List from "./List ";
import Controls from "./Controls ";

const Filter = (props) => {
  const [text, setText] = useState(props.string.slice());
  const [filter, setFilter] = useState("");
  const [isSort, setIsSort] = useState(false);
  const checkboxRef= useRef(isSort);
  const filterRef= useRef(filter);

  useEffect(() => {
    let newStr = props.string.filter((word) => word.includes(filter));
    if (isSort) {
      newStr = newStr.sort();
    }
    setText(newStr);
  }, [isSort, filter]);

  const resetFn = () => {
    setFilter("");
    setIsSort(false);
  };
  let typeBtn = [
    { class: "checkbox", ref:checkboxRef, type: "checkbox", checked: isSort, onChange: () => setIsSort(checkboxRef.current.checked) },
    { class: "filter",ref:filterRef, type: "text", value: filter, onChange: () => setFilter(filterRef.current.value) },
    { class: "button", type: "button", defaultValue: "Сброс", onClick: resetFn },
  ];
  let btnSettings = typeBtn.map((btn, index) => {
    return <Controls key={index} controlOptions={btn} />;
  });
  return (
    <div className="Filter">
      <div className="btns">
      {btnSettings}
      </div>
      <List string={text} />
    </div>
  );
};

Filter.propTypes = {
  string: PropTypes.array.isRequired,
};

export default Filter;
