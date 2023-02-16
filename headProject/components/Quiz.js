import React, { useEffect, Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Popup from "./Popup";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Quiz = (props) => {
  const dataPagination = useSelector((state) => state.dataPagination);
  const dispatch = useDispatch();
  useEffect(() => {
    let url = "http://localhost:3500/question";
    if (dataPagination) {
      url = `http://localhost:3500/question?_limit=2&_page=${dataPagination}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "dataQuestions",
          dataQuestions: json,
        });
        if (!dataPagination) {
          dispatch({
            type: "allDataQuestions",
            allDataQuestions: json,
          });
        }
      });
  }, [dataPagination]);
  console.log("Quiz");
  return (
      <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/navbar" element={<Navbar />} />
            </Routes>
          <Footer />
          <Popup />
    </BrowserRouter>
  );
};

export default Quiz;
