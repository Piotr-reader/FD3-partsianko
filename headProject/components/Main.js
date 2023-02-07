import React from "react";
import PropTypes from "prop-types";

import "./Main.css";

const Main = (props) => {
  let question = props.questions.map((element) => {
    return (
      <section className="puzzle" key={element.question}>
        <h2 className="puzzle__number">{element.question}.</h2>
        <p className="puzzle__text">{element.text}</p>
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
        <div className="correct-answer-board">
          <p className="correct-answer-board__text">Поздравляем! Начало положено, вы&nbsp;разгадали первое из&nbsp;семи заданий.</p>
        </div>
        <div className="hint-board">
          <p className="hint-board__text">{element.hint__text}</p>
          <p className="hint-board__text">
            <span className="hint-board__span-accent">Правильный ответ:</span>
            {element.answer}.
          </p>
        </div>
        {/* <p className="puzzle__video-description">Подсказка №1</p>
    <iframe
      className="puzzle__video"
      id="ytplayer"
      type="text/html"
      width="720"
      height="405"
      src="https://www.youtube.com/embed/mCVBrKfyzQY"
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <p className="puzzle__video-description">Подсказка №2</p>
    <iframe
      className="puzzle__video"
      id="ytplayer"
      type="text/html"
      width="720"
      height="405"
      src="https://www.youtube.com/embed/704nRRLQesE"
      frameBorder="0"
      allowFullScreen
    ></iframe> */}
      </section>
    );
  });
  return (
    <main className="Main">
      <section className="description">
        <img className="description__image" src="./images/description__image.gif" />
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
      {question}
    </main>
  );
};

export default Main;
