"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Filter from "./components/Filter";

let string = require("./string.json");

ReactDOM.render(React.createElement(Filter, { string: string }), document.getElementById("container"));
