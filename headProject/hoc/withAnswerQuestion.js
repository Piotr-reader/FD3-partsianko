import React from "react";
import "./withAnswerQuestion.css";
let withAnswerQuestion = (Component) => (props) => {
  let comp = <Component {...props} />;
  comp = (
    <div>
      {comp}
      <p className="correct-answer-board__text" style={{ backgroundColor: "green" }}>
        Поздравляем! Начало положено, вы&nbsp;разгадали первое из&nbsp;семи заданий.
      </p>
    </div>
  );

  return <div className="withAnswerQuestion">{comp}</div>;
};
export { withAnswerQuestion };
