"use strict";
import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { formatUserCodeEvents, saveFormatClientEvents } from "./events";
import "./Client.css";

class FormatClient extends React.PureComponent {
  static propTypes = {
    client: PropTypes.shape({
      code: PropTypes.number.isRequired,
      surname: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number,
    }),
  };

  surnameRef = React.createRef();
  nameRef = React.createRef();
  otchRef = React.createRef();
  balanceRef = React.createRef();

  saveFormat = () => {
    let newClient = { ...this.props.client };
    (newClient.surname = this.surnameRef.current.value),
      (newClient.name = this.nameRef.current.value),
      (newClient.otch = this.otchRef.current.value),
      (newClient.balance = +this.balanceRef.current.value),
      saveFormatClientEvents.emit("ESaveClicked", newClient);
  };
  cancelFormat = () => {
    formatUserCodeEvents.emit("EFormatClicked", null);
  };

  render() {
    console.log("render FormatClient");
    return (
      <tr>
        <td>{<input ref={this.surnameRef} className="inputText" type="text" defaultValue={this.props.client.surname} />}</td>
        <td>{<input ref={this.nameRef} className="inputText" type="text" defaultValue={this.props.client.name} />}</td>
        <td>{<input ref={this.otchRef} className="inputText" type="text" defaultValue={this.props.client.otch} />}</td>
        <td>{<input ref={this.balanceRef} className="inputText" type="number" defaultValue={+this.props.client.balance} />}</td>
        <td style={{ backgroundColor: this.props.client.balance > 0 ? "green" : "red" }}>{this.props.client.balance > 0 ? "active" : "blocked"}</td>
        <td>{<input className="button" type="button" value="Сохранить" onClick={this.saveFormat} />}</td>
        <td>{<input className="button" type="button" value="Отмена" onClick={this.cancelFormat} />}</td>
      </tr>
    );
  }
}
export default FormatClient;
