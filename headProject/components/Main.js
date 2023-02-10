import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Main.css";
import Question from "./Question";
import { withAnswerQuestion } from "../hoc/withAnswerQuestion";
import { withWrongQuestion } from "../hoc/withWrongQuestion";
import { withShowQuestion } from "../hoc/withShowQuestion";
import { useSelector } from "react-redux";

let FramedAnswerQuestion = withAnswerQuestion(Question);
let FramedWrongQuestion = withWrongQuestion(Question);
let FramedShowQuestion = withShowQuestion(Question);

const Main = (props) => {
  const answeredQuestion = useSelector((state) => state.answeredQuestion);
  const wrongAnswer = useSelector((state) => state.wrongAnswer);
  const showAnswer = useSelector((state) => state.showAnswer);

  let mainComponent = props.questions.map((question) => {
    for (const key of answeredQuestion) {
      if (key.numberQuestion === question.question) {
        return (
          <Fragment key={question.question}>
            <div style={{ borderBottom: "5px solid #e0a7e5" }}></div> <FramedAnswerQuestion question={question} />
          </Fragment>
        );
      }
    }
    if (wrongAnswer === question.question) {
      return (
        <Fragment key={question.question}>
          <div style={{ borderBottom: "5px solid #e0a7e5" }}></div> <FramedWrongQuestion question={question} />
        </Fragment>
      );
    }
    if (showAnswer === question.question) {
      return (
        <Fragment key={question.question}>
          <div style={{ borderBottom: "5px solid #e0a7e5" }}></div> <FramedShowQuestion question={question} />
        </Fragment>
      );
    }
    return (
      <Fragment key={question.question}>
        <div style={{ borderBottom: "5px solid #e0a7e5" }}></div>
        <Question question={question} />
      </Fragment>
    );
  });
  return (
    <main className="Main">
      <h1 className="header__title">КВЕСТ ПО&nbsp;ВЫСТАВКЕ ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ: ХУДОЖНИК ИЛИ МАШИНА?</h1>
      <section className="description">
        <h2 className="description__title">Несколько рекомендаций по&nbsp;прохождению квеста!</h2>
        <ul className="description__text">
          <li className="description__text-item">
            Не&nbsp;бросайтесь проходить квест сразу&nbsp;&mdash; для начала хотя&nbsp;бы минимально ознакомьтесь с&nbsp;экспозицией.
          </li>
          <li className="description__text-item">Отвечать на&nbsp;задания можно в&nbsp;любом удобном для вас порядке.</li>
          <li className="description__text-item">
            Если совсем не&nbsp;удаётся решить какое-то задание, то&nbsp;смело переходите к&nbsp;следующему. Пока будете решать следующее задание, можете
            натолкнуться на&nbsp;ответ к&nbsp;предыдущему <span>&#128521;</span>
          </li>
          <li className="description__text-item">Чтобы пройти квест, обращайте внимание на&nbsp;работы всех авторов.</li>
          <li className="description__text-item">Если вы&nbsp;правильно ответите на&nbsp;все вопросы квеста, то&nbsp;получите приятный бонус от&nbsp;Farba.</li>
        </ul>
      </section>
      {mainComponent}
    </main>
  );
};
Main.propTypes = {
  questions: PropTypes.array.isRequired,
};
export default Main;
