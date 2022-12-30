"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Shop from "./components/Shop";

let itemShop = require("./itemShop.json");

ReactDOM.render(React.createElement(Shop, { startItem: itemShop }), document.getElementById("container"));
