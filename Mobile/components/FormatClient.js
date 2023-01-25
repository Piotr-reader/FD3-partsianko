import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { formatUserCodeEvents, saveFormatClientEvents } from "./events";
import "./Client.css";

class FormatClient extends React.Component {
  static propTypes = {
    client: PropTypes.shape({
      code: PropTypes.number.isRequired,
      surname: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
    selectedClientCode: PropTypes.number,
  };
  state = {
    surname: this.props.client.surname,
    name: this.props.client.name,
    otch: this.props.client.otch,
    balance: this.props.client.balance,
  };
  surnameRef = React.createRef();
  nameRef = React.createRef();
  otchRef = React.createRef();
  balanceRef = React.createRef();
  handleChange = () => {
    this.setState({
      surname: this.surnameRef.current.value,
      name: this.nameRef.current.value,
      otch: this.otchRef.current.value,
      balance: +this.balanceRef.current.value,
    });
  };
  saveFormat = () => {
    let newClient = { ...this.props.client };
    newClient.surname = this.state.surname;
    newClient.name = this.state.name;
    newClient.otch = this.state.otch;
    newClient.balance = this.state.balance;
    saveFormatClientEvents.emit("ESaveClicked", newClient);
  };
  cancelFormat = () => {
    formatUserCodeEvents.emit("EFormatClicked", null);
  };
  render() {
    console.log("render FormatClient");
    return (
      <Fragment>
        <tr>
          <td>{<input ref={this.surnameRef} className="inputText" type="text" value={this.state.surname} onChange={this.handleChange} />}</td>
          <td>{<input ref={this.nameRef} className="inputText" type="text" value={this.state.name} onChange={this.handleChange} />}</td>
          <td>{<input ref={this.otchRef} className="inputText" type="text" value={this.state.otch} onChange={this.handleChange} />}</td>
          <td>{<input ref={this.balanceRef} className="inputText" type="text" value={this.state.balance} onChange={this.handleChange} />}</td>
          <td style={{ backgroundColor: this.state.balance > 0 ? "green" : "red" }}>{this.state.balance > 0 ? "active" : "blocked"}</td>
          <td>{<input className="button" type="button" value="Сохранить" onClick={this.saveFormat} />}</td>
          <td>{<input className="button" type="button" value="Отмена" onClick={this.cancelFormat} />}</td>
        </tr>
      </Fragment>
    );
  }
}
export default FormatClient;
