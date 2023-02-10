import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Header.css";
import NavbarHeader from "./NavbarHeader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Header = (props) => {
  const answeredQuestionLength = useSelector((state) => state.answeredQuestion);
  const [isOpen, setIsOpen] = useState("100%");
  const dispatch = useDispatch();
  const burgerOpen = () => {
    if (isOpen !== "0") {
      setIsOpen("0");
    } else {
      setIsOpen("100%");
    }
  };
  function refreshQuizAnswer() {
    dispatch({
      type: "refresh_answer",
    });
  }
  return (
    <header className="Header">
      <div className="header__info">
        <div className="logo">
          <img className="header_logo_img" src="./images/farba_logo_social.jpg" alt="logo" />
        </div>
        <div className="score">
          <div>
            Всего вопросов: <span className="total_questions">{props.lengthOfQuestion}</span>
          </div>
          <div>
            Вы ответили на: <span className="correct_answers">{answeredQuestionLength.length}</span>
          </div>
        </div>
        <div className="header_btn">
          <input className="form__button btn__popup_reset" type="button" value="Сбросить" onClick={refreshQuizAnswer} />
          <input className="form__button btn_gift" type="button" value="Приз" />
        </div>
        <div className="header_burger" onClick={burgerOpen}>
          <span></span>
        </div>
      </div>
      <nav className="navbar_container">
        <div className="navbar" style={{ left: isOpen }}>
          <ul className="navbar_width">
            <NavbarHeader lengthOfQuestion={props.lengthOfQuestion} />
          </ul>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  lengthOfQuestion: PropTypes.number.isRequired,
};

export default Header;
