import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="Footer">
      <h2 className="footer__heading">Наши социальные сети</h2>
      <nav>
        <ul className="footer__links-list">
          <li className="footer__links-list-item">
            <NavLink to="https://www.instagram.com/farba.gallery/" target="_blank" className="footer__link">
              <img className="footer__social-icon" src="./images/instagram_color_white.svg" alt="Instagram" />
              Instagram
            </NavLink>
          </li>
          <li className="footer__links-list-item">
            <NavLink to="https://www.facebook.com/%D0%93%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F-Farba-102809942450762" className="footer__link" target="_blank">
              <img className="footer__social-icon" src="./images/facebook_color_white.svg" alt="Facebook" />
              Facebook
            </NavLink>
          </li>
          <li className="footer__links-list-item">
            <NavLink to="https://vk.com/farba.gallery" target="_blank" className="footer__link">
              <img className="footer__social-icon" src="./images/vk_color_white.svg" alt="ВКонтакте" />
              ВКонтакте
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
