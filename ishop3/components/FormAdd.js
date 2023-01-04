import React from "react";
import PropTypes from "prop-types";

import "./FormAdd.css";

class FormAdd extends React.Component {
  render() {
    let form = (
      <form>
        <label>
          Товар:
          <input type="text" />
        </label>
        <br />
        <label>
          Количество:
          <input type="text" />
        </label>
        <br />
        <label>
          Картинка:
          <select>
            <option value="img1">img1</option>
            <option value="img2">img2</option>
            <option value="img3">img3</option>
          </select>
        </label>
        <br />
        <label>
          Цена:
          <input type="text" />
        </label>
      </form>
    );
    return <div className="FormAdd">{form}</div>;
  }
}
export default FormAdd;
