import React from "react";
import PropTypes from "prop-types";

import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="Footer">
      <h2 className="footer__heading">Наши социальные сети</h2>
      <nav>
        <ul className="footer__links-list">
          <li className="footer__links-list-item">
            <a to="/" className="footer__link">
              <img className="footer__social-icon" src="./images/instagram_color_white.svg" alt="Instagram" />
              Instagram
            </a>
          </li>
          <li className="footer__links-list-item">
            <a to="#" className="footer__link">
              <img className="footer__social-icon" src="./images/facebook_color_white.svg" alt="Facebook" />
              Facebook
            </a>
          </li>
          <li className="footer__links-list-item">
            <a to="#" className="footer__link">
              <img className="footer__social-icon" src="./images/vk_color_white.svg" alt="ВКонтакте" />
              ВКонтакте
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
