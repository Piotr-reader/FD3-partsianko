import React from "react";
import PropTypes from "prop-types";

import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <div className="score">
        <div>
          Всего <span className="total_questions"></span> вопросов "{props.lengthOfQuestion}"
        </div>
        <div>
          Вы ответили на <span className="correct_answers">0</span>
        </div>
      </div>
      <h1 className="header__title">КВЕСТ ПО ВЫСТАВКЕ «ОЧАРОВАНИЯ ДЕЛАКРУА»</h1>
    </header>
  );
};

Header.propTypes = {
  lengthOfQuestion: PropTypes.number.isRequired,
};

export default Header;
