import React from "react";
import PropTypes from "prop-types";
import "./Main.css";
import Question from "./Question";
import { withAnswerQuestion} from "../hoc/withAnswerQuestion";

let FramedAnswerQuestion= withAnswerQuestion(Question);

const Main = (props) => {
  let mainComponent = props.questions.map((question) => {
    if (question.isSelectedQuestion) {
      return <FramedAnswerQuestion key={question.question} question={question}/>;
    } else {
      return <Question key={question.question} question={question}/>;
    }
  });
  return (
    <main className="Main">
      <section className="description">
        {/* <img className="description__image" src="./images/description__image.gif" /> */}
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
