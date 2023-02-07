"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./components/Quiz";

let questions = require("./questions.json");

ReactDOM.render(React.createElement(Quiz, { questions: questions }), document.getElementById("container"));
