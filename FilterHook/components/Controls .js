import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./Controls.css";
const Controls = (props) => {
  const [filter, setFilter] = useState("");
  const [isSort, setIsSort] = useState(false);
  const checkboxRef = useRef(isSort);
  const filterRef = useRef(filter);
  useEffect(() => {
    let newStr = props.string.slice();
    if (filter) {
      newStr = newStr.filter((word) => word.includes(filter));
    }
    if (isSort) {
      newStr = newStr.sort();
    }
    props.cbSetText(newStr);
  }, [isSort, filter]);

  const resetFn = () => {
    setFilter("");
    setIsSort(false);
  };
  return (
    <div>
      <input className="checkbox" ref={checkboxRef} type="checkbox" checked={isSort} onChange={() => setIsSort(checkboxRef.current.checked)} />
      <input className="filter" ref={filterRef} type="text" value={filter} onChange={() => setFilter(filterRef.current.value)} />
      <input className="button" type="button" defaultValue="Сброс" onClick={resetFn} />
    </div>
  );
};
Controls.propTypes = {
  string: PropTypes.array.isRequired,
  cbSetText: PropTypes.func.isRequired,
};

export default Controls;
