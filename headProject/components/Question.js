import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./Main.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
const Question = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const answeredQuestion = useSelector((state) => state.answeredQuestion);
  let inoutValue = "";
  answeredQuestion.forEach((question) => {
    if (question.numberQuestion === props.question.question) {
      inoutValue = question.valueInput;
    }
  });
  const checkAnswer = () => {
    if (props.question.answer === inputRef.current.value) {
      const correctAnswerObject = {
        numberQuestion: props.question.question,
        valueInput: inputRef.current.value,
      };
      dispatch({
        type: "correct_answer",
        numberQuestion: correctAnswerObject,
      });
    } else {
      dispatch({
        type: "wrong_answer",
        numberQuestion: props.question.question,
      });
    }
  };
  const showAnswer = () => {
    dispatch({
      type: "show_answer",
      numberQuestion: props.question.question,
    });
  };
  let img = props.question.srcImg && <img className="puzzle__image" src={props.question.srcImg} alt="Тут должно быть зашифрованное изображение." />;
  return (
    <section className="puzzle" id={props.question.question}>
      <h2 className="puzzle__number">
        Вопрос <br />
        {props.question.question}
      </h2>
      <p className="puzzle__text" dangerouslySetInnerHTML={{ __html: props.question.text }} />
      {img}
      <div className="form">
        <label className="form__label">Ваш ответ:</label>
        <input ref={inputRef} className="form__field" defaultValue={inoutValue} type="text" placeholder={props.question.placeholder} />
        <div className="form__button-container">
          <input className="form__button form__button_type_submit" type="button" value="Ответить" onClick={checkAnswer} />
          <input className="form__button form__button_type_hint" type="button" value="Узнать ответ" onClick={showAnswer} />
        </div>
      </div>
      <div className="board">
        <span className="board__span-accent">Правильный ответ: </span>
        {props.question.answer}.
      </div>
    </section>
  );
};
Question.propTypes = {
  question: PropTypes.object.isRequired,
};
export default Question;
