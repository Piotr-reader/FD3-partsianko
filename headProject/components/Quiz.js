import React, { useEffect, Fragment, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Popup from "./Popup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

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

  console.log("render Quiz");
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
      <Footer />
      <Popup />
    </Fragment>
  );
};

export default Quiz;
