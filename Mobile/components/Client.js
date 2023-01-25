import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { deleteUserCodeEvents, formatUserCodeEvents } from "./events";
import "./Client.css";

class ClientMobile extends React.Component {
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
  formatClicked = () => {
    formatUserCodeEvents.emit("EFormatClicked", this.props.client.code);
  };
  deleteClient = (EO) => {
    deleteUserCodeEvents.emit("EDeleteClicked", this.props.client.code);
  };

  render() {
    console.log("render Client");
    return (
      <Fragment>
        <tr>
          <td>{this.props.client.surname}</td>
          <td>{this.props.client.name}</td>
          <td>{this.props.client.otch}</td>
          <td>{this.props.client.balance}</td>
          <td style={{ backgroundColor: this.props.client.balance > 0 ? "green" : "red" }}>{this.props.client.balance > 0 ? "active" : "blocked"}</td>
          <td>{<input className="button" type="button" value="Редактировать" onClick={this.formatClicked} />}</td>
          <td>{<input className="button" type="button" value="Удалить" onClick={this.deleteClient} />}</td>
        </tr>
      </Fragment>
    );
  }
}
export default ClientMobile;
