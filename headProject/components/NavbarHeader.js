import React from "react";
import { useSelector } from "react-redux";
import "./NavbarHeader.css";
const NavbarHeader = (props) => {
  const answeredQuestion = useSelector((state) => state.answeredQuestion);
  const allDataQuestions = useSelector((state) => state.allDataQuestions);
  let navbarCollection = [];
  for (let i = 0; i < allDataQuestions.length; i++) {
    let isVisible = "none";
    answeredQuestion.forEach((question) => {
      if (question.numberQuestion === i + 1) {
        isVisible = "block";
      }
    });
    let element = (
      <li key={i + 1}>
        <span className="checked_answer" style={{ display: isVisible }} dangerouslySetInnerHTML={{ __html: "&#10004" }} />
        <div className="navbar_text">Вопрос {allDataQuestions[i].question}</div>
      </li>
    );
    navbarCollection.push(element);
  }

  return navbarCollection;
};

export default NavbarHeader;
