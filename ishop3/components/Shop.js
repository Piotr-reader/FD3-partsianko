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
    isClickColor: false,
    isBtnDisabled: false,
    selectedItemFormat: null,
    selectedBtnForm: null,
    isOpenDescription: false,
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
  cbSelectedItem = (code, opendescription) => {
    if (this.state.selectedItemId === code) {
      code = null;
      opendescription = false;
    }
    this.setState({ selectedItemId: code, isOpenDescription: opendescription });
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
    this.setState({ isFormOpen: true, selectedItemId: item.code, selectedItemFormat: item, isOpenDescription: false });
  };
  cbDisabledBtns = () => {
    this.setState({ isBtnDisabled: true });
  };
  cbisClickColor = () => {
    this.setState({ isClickColor: true });
  };
  cbCancelForm = () => {
    this.setState({ isFormOpen: false, isBtnDisabled: false, isClickColor: false, selectedItemId: null });
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
    this.setState({ itemsList: newItem, selectedBtnForm: null, isClickColor: false, selectedItemId: null });
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
              cbCancelForm={this.cbCancelForm}
              color={this.state.selectedItemId === item.code ? (color = "red") : (color = "gray")}
              isBtnDisabled={this.state.isBtnDisabled}
              isClickColor={this.state.isClickColor}
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
            cbisClickColor={this.cbisClickColor}
          />
        )}
        {this.state.isOpenDescription && <ItemDescription itemsList={this.state.itemsList} selectedItemId={this.state.selectedItemId} />}
      </Fragment>
    );
  }
}
export default Shop;
