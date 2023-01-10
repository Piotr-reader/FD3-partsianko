"use strict";

import React from "react";
import ReactDOM from "react-dom";

import RainbowFrame from "./RainbowFrame";

let colors = ["red", "orange", "yellow", "green", "#00BFFF", "blue", "purple"];
let text = "Hello!";
ReactDOM.render(
  <RainbowFrame colors={colors} text={text}>
    {text}
  </RainbowFrame>,
  document.getElementById("container")
);
