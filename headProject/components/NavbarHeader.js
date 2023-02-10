import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const NavbarHeader = (props) => {
  const answeredQuestion = useSelector((state) => state.answeredQuestion);

  let navbarCollection = [];
  for (let i = 1; i <= props.lengthOfQuestion; i++) {
    let isVisible = "none";
    answeredQuestion.forEach((question) => {
      if (question.numberQuestion === i) {
        isVisible = "block";
      }
    });
    let element = (
      <li key={i} onClick={props.cbBurgerOpen}>
        <span className="checked_answer" style={{ display: isVisible }} dangerouslySetInnerHTML={{ __html: "&#10004" }} />
        <NavLink className="navbar_text" to={`/${i}`}>
          Вопрос {i}
        </NavLink>
      </li>
    );

    navbarCollection.push(element);
  }

  return navbarCollection;
};
NavbarHeader.propTypes = {
  lengthOfQuestion: PropTypes.number.isRequired,
  cbBurgerOpen: PropTypes.func.isRequired,
};
export default NavbarHeader;
