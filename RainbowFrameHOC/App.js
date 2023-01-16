"use strict";

import React from "react";
import ReactDOM from "react-dom";
import DoubleButton from "./DoubleButton";
import { withRainbowFrame } from "./withRainbowFrame";

let colors = ["red", "orange", "yellow", "green", "#00BFFF", "blue", "purple"];

let DoubleButtonWithBG = withRainbowFrame(colors)(DoubleButton);

ReactDOM.render(
  <DoubleButtonWithBG caption1="однажды" caption2="пору" cbPressed={(num) => alert(num)}>
    в студёную зимнюю
  </DoubleButtonWithBG>,
  document.getElementById("container")
);
