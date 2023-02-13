import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import questionReducer from "../redux/questionReducer";
import Popup from "./Popup";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const store = createStore(questionReducer);

const Quiz = (props) => {
  const [dataQuestions, setdataQuestions] = useState([]);
  useEffect(() => {
    let url = "http://localhost:3500/question";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setdataQuestions(json));
  }, []);

  return (
    <Provider store={store}>
      <Header questions={dataQuestions} />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/List" element={<Navbar questions={dataQuestions} />} />
        <Route element={<Main />} />
      </Routes>
      <Footer />
      <Popup />
    </Provider>
  );
};

export default Quiz;
