import React from "react";
import "./withAnswerQuestion.css";
let withWrongQuestion = (Component) => (props) => {
  let comp = <Component {...props} />;
  comp = (
    <div>
      {comp}
      <p className="correct-answer-board__text" style={{ backgroundColor: "red" }}>
        К&nbsp;сожалению, это неправильный ответ. Попробуйте еще раз! Помните, что можно воспользоваться видеоподсказками или нажать на&nbsp;кнопку
        &laquo;Узнать ответ&raquo;.
      </p>
    </div>
  );

  return <div className="withWrongQuestion">{comp}</div>;
};
export { withWrongQuestion };
