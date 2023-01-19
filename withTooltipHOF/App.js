"use strict";

import React from "react";
import ReactDOM from "react-dom";
import DoubleButton from "./components/DoubleButton";
import { withTultipHOF } from "./hoc/withTultipHOF";
import "./App.css";

const delay = 1000;
const tultip = <span className="tooltiptext">Я Тултип</span>;
const DoubleButtonwithTultip = withTultipHOF(tultip, delay)(DoubleButton);

ReactDOM.render(
  <div className="collectComp">
    <DoubleButton caption1="однажды" caption2="пору" cbPressed={(num) => alert(num)}>
      в студёную зимнюю
    </DoubleButton>
    <DoubleButtonwithTultip caption1="я из лесу" caption2="мороз" cbPressed={(num) => alert(num)}>
      у меня есть Тултип
    </DoubleButtonwithTultip>
  </div>,
  document.getElementById("container")
);
