import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Filter.css";
import List from "./List ";
import Controls from "./Controls ";

const Filter = (props) => {
  const [text, setText] = useState(props.string.slice());
  const [filter, setTextInput] = useState("");
  const [isSort, setIsSort] = useState(false);

  useEffect(() => {
    let newStr = props.string.filter((word) => word.includes(filter));
    if (isSort) {
      newStr = newStr.sort();
    }
    setText(newStr);
  }, [isSort, filter]);

  const resetFn = () => {
    setTextInput("");
    setIsSort(false);
  };
  let typeBtn = [
    { class: "checkbox", type: "checkbox", checked: isSort, onChange: () => setIsSort((prev) => !prev) },
    { class: "filter", type: "text", value: filter, onChange: (EO) => setTextInput(EO.target.value) },
    { class: "button", type: "button", defaultValue: "Сброс", onClick: resetFn },
  ];
  let btnSettings = typeBtn.map((btn, index) => {
    return <Controls key={index} controlOptions={btn} />;
  });
  return (
    <div className="Filter">
      {btnSettings}
      <List string={text} />
    </div>
  );
};

Filter.propTypes = {
  string: PropTypes.array.isRequired,
};

export default Filter;
