import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./Main.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Popup.css";

const Popup = (props) => {
  const popupState = useSelector((state) => state.popupState);
  const dispatch = useDispatch();
  let opacity = 0;
  let visibility = "hidden";
  let transform = "perspective(600px) translate(0px, -100%) rotateX(45deg)";
  let btn = null;
  let text = null;
  if (popupState) {
    opacity = "unset";
    visibility = "visible";
    transform = "perspective(600px) translate(0px, 0%) rotateX(0deg)";
    btn = popupState.btnReset && <input className="form__button btn_reset" type="button" value="Сбросить" onClick={btnReset} />;
    text = <p className="popup_description" dangerouslySetInnerHTML={{ __html: popupState.popup_text }} />;
  }
  function btnReset() {
    dispatch({
      type: "refresh_answer",
    });
  }
  const btnCancel = () => {
    dispatch({
      type: "cancel_popup",
    });
  };

  return (
    <div id="popup" className="Popup" style={{ opacity: opacity, visibility: visibility }}>
      <div className="popup_body">
        <div className="popup_content" style={{ opacity: opacity, transform: transform }}>
          <button className="popup_close" onClick={btnCancel}>
            <img src="./images/close-popup.svg" alt="picture" />
          </button>
          <div className="popup_title">
            <div className="popup_text">
              {text}
              <img className="popup_img" src="./images/farba_logo_social.jpg" alt="picture" />
            </div>
            <div className="popup_reset_btn">
              <input className="form__button btn_cancel" type="button" value="Отмена" onClick={btnCancel} />
              {btn}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Popup.propTypes = {
//   question: PropTypes.object.isRequired,
// };
export default Popup;
