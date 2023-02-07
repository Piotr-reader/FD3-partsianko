import React from "react";
import PropTypes from "prop-types";

import "./Main.css";

const Question = (props) => {

  return (
      <section className="puzzle">
        <h2 className="puzzle__number">{props.question.question}.</h2>
        <p className="puzzle__text">{props.question.text}</p>
        <div className="form">
          <label className="form__label">Ваш ответ:</label>
          <input className="form__field" type="text" placeholder="Например: 1984" />
          <div className="form__button-container">
            <input className="form__button form__button_type_submit" type="button" value="Ответить" />
            <input className="form__button form__button_type_hint" type="button" value="Узнать ответ" />
          </div>
        </div>
        <div className="wrong-answer-board">
          <p className="wrong-answer-board__text">
            К&nbsp;сожалению, это неправильный ответ. Попробуйте еще раз! Помните, что можно воспользоваться видеоподсказками или нажать на&nbsp;кнопку
            &laquo;Узнать ответ&raquo;.
          </p>
        </div>
        <div className="board">
          <p className="board__text">{props.question.hint__text}</p>
          <p className="board__text">
            <span className="board__span-accent">Правильный ответ:</span>
            {props.question.answer}.
          </p>
        </div>
        </section>
  );
};
Question.propTypes = {
 question: PropTypes.object.isRequired,
};
export default Question;