"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Mobile from "./components/Mobile";

let clientList = require("./clientList.json");

ReactDOM.render(React.createElement(Mobile, { clientList: clientList }), document.getElementById("container"));
