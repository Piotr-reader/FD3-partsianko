import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import NavbarHeader from "./NavbarHeader";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const isBurgerOpen = useSelector((state) => state.isBurgerOPen);
  return (
    <nav className="navbar_container">
      <div className="navbar" style={{ left: isBurgerOpen }}>
        <ul className="navbar_width">
          <NavbarHeader questions={props.questions} />
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default Navbar;
