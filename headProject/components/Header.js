import React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Pagination from "./Pagination";

const Header = (props) => {
  const answeredQuestionLength = useSelector((state) => state.answeredQuestion);
  const isBurgerOPen = useSelector((state) => state.isBurgerOPen);
  const dispatch = useDispatch();
  const burgerOpen = () => {
    let isOpen;
    if (isBurgerOPen !== "0") {
      isOpen = "0";
    } else {
      isOpen = "100%";
    }
    dispatch({
      type: "isBurgerOPen",
      isBurgerOPen: isOpen,
    });
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
  const setAllData = () => {
    dispatch({
      type: "pagination",
      dataPagination: "",
    });
  };
  let root = "/";
  isBurgerOPen === "0" ? (root = "/") : (root = "/List");
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
            Всего вопросов: <span className="total_questions">{props.questions.length}</span>
          </div>
          <div>
            Вы ответили на: <span className="correct_answers">{answeredQuestionLength.length}</span>
          </div>
        </div>
        <div className="header_btn">
          <input className="form__button btn__popup_reset" type="button" value="Сбросить" onClick={refreshQuizAnswer} />
          <input className="form__button btn_gift" type="button" value="Приз" onClick={giftBtn} />
        </div>
        <NavLink className="menu_text" to={root}>
          <div className="header_burger" onClick={burgerOpen}>
            <span></span>
          </div>
        </NavLink>
        <div className="menu_container">
          <NavLink className="menu_text" to={"/"}>
            Квест
          </NavLink>
          <div onClick={burgerOpen}>
            <NavLink className="menu_text" to={"/List"}>
              Список вопросов
            </NavLink>
          </div>
        </div>
      </div>
      <div className="pagination">
        Страница вопросов:
        <input className="btn_pagination" type="button" defaultValue="all" onClick={setAllData} />
        <Pagination questions={props.questions} />
      </div>
      <Routes>
        <Route path="/List" element={<Navbar cbBurgerOpen={burgerOpen} questions={props.questions} />} />
      </Routes>
    </header>
  );
};

Header.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default Header;
