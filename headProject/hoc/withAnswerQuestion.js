import React from "react";
import "./withAnswerQuestion.css";
let withAnswerQuestion= (Component) => (props) => {
  let comp = <Component {...props} />;
  console.log(props.question.board__text);
    comp = (
      <div className="border" style={{ borderColor: 'green' }}>
        {comp}
        <p className="correct-answer-board__text">Поздравляем! Начало положено, вы&nbsp;разгадали первое из&nbsp;семи заданий.</p>
      </div>
    );

  return <div className="withAnswerQuestion">{comp}</div>;
};
export { withAnswerQuestion};