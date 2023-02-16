import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./components/Quiz";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import questionReducer from "./redux/questionReducer";
const store = createStore(questionReducer);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Quiz />
    </Provider>
  </BrowserRouter>,
  document.getElementById("container")
);
