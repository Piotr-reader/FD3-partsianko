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
    const popupProps = {
      popup_text: "Вы уверены что хотите сбросить результат?",
      btnReset: true,
    };
    dispatch({
      type: "popup_props",
      popup_description: popupProps,
    });
  }
  const giftBtn = () => {
    const popupProps = {
      popup_text:
        props.lengthOfQuestion !== answeredQuestionLength.length
          ? "Вам нужно верно ответить на все семь вопросов."
          : "Семь из&nbsp;семи, наши поздравления! Теперь можете получить свой бонус у&nbsp;администратора. <br>  Надеемся, что вам понравилось! Если квест, действительно, пришёлся вам по&nbsp;душе или есть какие-то пожелания по&nbsp;нему, то&nbsp;будем признательны, если упомянете об&nbsp;этом в&nbsp;своих социальных сетях, отметив при этом нас&mdash; нам будет о-о-очень приятно! В&nbsp;любом случае, будем рады если подпишетесь на&nbsp;наши социальные сети, которые найдете внизу страницы.",
      btnReset: false,
    };
    dispatch({
      type: "popup_props",
      popup_description: popupProps,
    });
  };
  return (
    <header className="Header">
      <div className="header__info">
        <div className="logo">
          <NavLink to="https://farba.gallery/" target="_blank">
            <img className="header_logo_img" src="./images/farba_logo_social.jpg" alt="logo" />
          </NavLink>
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
          <input className="form__button btn_gift" type="button" value="Приз" onClick={giftBtn} />
        </div>
        <div className="header_burger" onClick={burgerOpen}>
          <span></span>
        </div>
      </div>
      <nav className="navbar_container">
        <div className="navbar" style={{ left: isOpen }}>
          <ul className="navbar_width">
            <NavbarHeader lengthOfQuestion={props.lengthOfQuestion} cbBurgerOpen={burgerOpen} />
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
