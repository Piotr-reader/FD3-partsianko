import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./Shop.css";
import Item from "./Item";
import FormAdd from "./FormAdd";
import ItemDescription from "./ItemDescription";

class Shop extends React.Component {
  static propTypes = {
    startItem: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        shop: PropTypes.string.isRequired,
      })
    ),
  };
  state = {
    itemsList: this.props.startItem,
    selectedItemId: null,
    isFormOpen: false,
    isBtnDisabled: false,
    selectedItemFormat: null,
    selectedBtnForm: null,
  };
  addItem = () => {
    this.setState({ selectedBtnForm: "add" });
    let newItem = {
      shop: "",
      item: "",
      code: this.state.itemsList[this.state.itemsList.length - 1].code + 1,
      price: "",
      quantity: "",
      img: "",
    };
    this.cbOpenFormFn(newItem);
  };
  cbSelectedItem = (code) => {
    this.state.selectedItemId === code && (code = null);
    this.setState({ selectedItemId: code });
  };
  cbDeleteItemFn = (code) => {
    const { itemsList } = this.state;
    let newItem = [];
    let confirmTrue = confirm("Удалить?");
    if (confirmTrue) {
      for (let item of itemsList) {
        item.code !== code && newItem.push(item);
      }
      this.setState({ itemsList: newItem });
    }
  };
  cbOpenFormFn = (item) => {
    // this.setState({ isFormOpen: true, isBtnDisabled: true, selectedItemId: null, selectedItemFormat: item });
    this.setState({ isFormOpen: true, selectedItemId: null, selectedItemFormat: item });
  };
  cbDisabledBtns = () => {
    this.setState({ isBtnDisabled: true });
  };
  cbCancelForm = () => {
    this.setState({ isFormOpen: false, isBtnDisabled: false });
  };
  cbSaveForm = (changeItem) => {
    let newItem = this.state.itemsList;
    if (this.state.selectedBtnForm) {
      newItem.push(changeItem);
    } else {
      newItem.forEach((item, index) => {
        item.code === changeItem.code && (newItem[index] = changeItem);
      });
    }
    this.setState({ itemsList: newItem, selectedBtnForm: null });
  };
  render() {
    let color = "";
    let shopName = this.state.itemsList.map((item) => {
      return (
        <div key={item.code} className="component">
          <span className="nameShop">{item.shop}</span>
          <div className="test">
            <Item
              item={item}
              cbSelectedItem={this.cbSelectedItem}
              cbDeleteItemFn={this.cbDeleteItemFn}
              cbOpenFormFn={this.cbOpenFormFn}
              color={this.state.selectedItemId === item.code ? (color = "red") : (color = "gray")}
              isBtnDisabled={this.state.isBtnDisabled}
            />
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <div className="Shop">{shopName}</div>
        <input className="button" type="button" value="Новый" onClick={this.addItem} disabled={this.state.isBtnDisabled} />
        {this.state.isFormOpen && (
          <FormAdd
            cbCancelForm={this.cbCancelForm}
            cbSaveForm={this.cbSaveForm}
            cbDisabledBtns={this.cbDisabledBtns}
            selectedItemFormat={this.state.selectedItemFormat}
            selectedBtnForm={this.state.selectedBtnForm}
            itemsList={this.state.itemsList}
          />
        )}
        {this.state.selectedItemId && <ItemDescription itemsList={this.state.itemsList} selectedItemId={this.state.selectedItemId} />}
      </Fragment>
    );
  }
}
export default Shop;
