import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./Mobile.css";
import ClientMobile from "./Client";
import FormatClient from "./FormatClient";
import { deleteUserCodeEvents, formatUserCodeEvents, saveFormatClientEvents } from "./events";

class Mobile extends React.Component {
  static propTypes = {
    clientList: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        surname: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };
  state = {
    clientList: [...this.props.clientList],
    selectedClientCode: null,
  };
  allClients = () => {
    if (this.state.clientList !== this.props.clientList) {
      this.setState({ clientList: this.props.clientList });
    }
  };
  activeClients = () => {
    let activeClientsList = [];
    this.props.clientList.forEach((client) => {
      if (client.balance > 0) {
        activeClientsList.push(client);
      }
    });
    this.setState({ clientList: activeClientsList });
  };
  blockedClients = () => {
    let activeClientsList = [];
    this.props.clientList.forEach((client) => {
      if (client.balance <= 0) {
        activeClientsList.push(client);
      }
    });
    this.setState({ clientList: activeClientsList });
  };
  addNewClient = () => {
    let newCode = this.state.clientList[this.state.clientList.length-1].code+1
    const newClient = {
      "code": newCode, "surname": "", "name": "", "otch": "", "balance": 0
    }
    let newList = [...this.state.clientList,newClient]
    this.setState({ clientList: newList, selectedClientCode: newCode });
  }
  componentDidMount = () => {
    deleteUserCodeEvents.addListener("EDeleteClicked", this.clientCodeDeleteSelected);
    formatUserCodeEvents.addListener("EFormatClicked", this.clientCodeFormatSelected);
    saveFormatClientEvents.addListener("ESaveClicked", this.saveFormatClientSelected);
  };
  componentWillUnmount = () => {
    deleteUserCodeEvents.removeListener("EDeleteClicked", this.clientCodeDeleteSelected);
    formatUserCodeEvents.removeListener("EFormatClicked", this.clientCodeFormatSelected);
    saveFormatClientEvents.removeListener("ESaveClicked", this.saveFormatClientSelected);
  };
  clientCodeDeleteSelected = (code) => {
    let newClientsArr = [];
    for (let client of this.state.clientList) {
      if (code !== client.code) {
        newClientsArr.push(client);
      }
    }
    this.setState({ clientList: newClientsArr });
  };
  clientCodeFormatSelected = (code) => {
    this.setState({ selectedClientCode: code });
  };
  saveFormatClientSelected = (newClient) => {
    let newClientsArr = [];
    for (let client of this.state.clientList) {
      if (newClient.code === client.code) {
        newClientsArr.push(newClient);
      } else {
        newClientsArr.push(client);
      }
    }
    this.setState({ clientList: newClientsArr, selectedClientCode: null });
  };
  render() {
    console.log("render Mobile");
    let clientMobile = this.state.clientList.map((client) => {
      if (client.code === this.state.selectedClientCode) {
        return <FormatClient key={client.code} client={client} selectedClientCode={this.state.selectedClientCode} />;
      } else {
        return <ClientMobile key={client.code} client={client} selectedClientCode={this.state.selectedClientCode} />;
      }
    });
    return (
      <div className="Mobile">
        <div className="btnsHeader">
          <input className="button" type="button" value="Все" onClick={this.allClients} />
          <input className="button" type="button" value="Активные" onClick={this.activeClients} />
          <input className="button" type="button" value="Заблокированные" onClick={this.blockedClients} />
        </div>
        <div className="clientsTable">
          <table>
            <thead>
              <tr>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>Баланс</th>
                <th>Статус</th>
                <th>Редактировать</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>{clientMobile}</tbody>
          </table>
        </div>
        <div className="addNewClient">
          <input className="button" type="button" value="Добавить клиента" onClick={this.addNewClient} />
        </div>
      </div>
    );
  }
}
export default Mobile;
