import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
const Quiz = (props) => {
  return (
    <Fragment>
      <Header lengthOfQuestion={props.questions.length} />
      <Main questions={props.questions} />
      <Footer />
    </Fragment>
  );
};
Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
};
export default Quiz;
