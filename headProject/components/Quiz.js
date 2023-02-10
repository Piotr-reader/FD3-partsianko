import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import questionReducer from "../redux/questionReducer";
const store = createStore(questionReducer);

const Quiz = (props) => {
  const [dataQuestions, setdataQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/question")
      .then((response) => response.json())
      .then((json) => setdataQuestions(json));
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header lengthOfQuestion={dataQuestions.length} />
        <Main questions={dataQuestions} />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default Quiz;
