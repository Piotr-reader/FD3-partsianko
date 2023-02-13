import React from "react";

let withShowQuestion = (Component) => (props) => {
  let comp = <Component {...props} />;
  comp = (
    <div>
      {comp}
      <p className="correct-answer-board__text" style={{ backgroundColor: "gray" }} dangerouslySetInnerHTML={{ __html: props.question.hint_board__text }} />
      <div className="board">
        <span className="board__span-accent">Правильный ответ: </span>
        <span className="board__answer_text">{props.question.answer}</span>
      </div>
    </div>
  );

  return <div className="withShowQuestion">{comp}</div>;
};
export { withShowQuestion };
