import React from "react";

let withShowQuestion = (Component) => (props) => {
  let comp = <Component {...props} />;
  comp = (
    <div>
      {comp}
      <p className="correct-answer-board__text" style={{ backgroundColor: "gray" }} dangerouslySetInnerHTML={{ __html: props.question.hint_board__text }} />
    </div>
  );

  return <div className="withShowQuestion">{comp}</div>;
};
export { withShowQuestion };
