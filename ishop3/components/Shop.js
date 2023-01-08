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
    arrImg: [],
    selectedItem: null,
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
  cbSelectedItem = (selectedItem, opendescription) => {
    if (this.state.selectedItem) {
      if (this.state.selectedItem.code === selectedItem.code) {
        selectedItem = null;
        opendescription = false;
      }
    }
    this.setState({ selectedItem: selectedItem, isOpenDescription: opendescription });
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
    let arrImg = [];
    let arrCode = [];
    this.state.itemsList.forEach((item) => {
      arrImg.push(item.img);
      arrCode.push(item.code);
    });
    this.setState({ isFormOpen: true, selectedItem: item, isOpenDescription: false, arrImg: arrImg });
  };
  cbDisabledBtns = () => {
    this.setState({ isBtnDisabled: true });
  };
  cbisClickColor = () => {
    this.setState({ isClickColor: true });
  };
  cbCancelForm = () => {
    this.setState({ isFormOpen: false, isBtnDisabled: false, isClickColor: false, selectedItem: null });
  };
  cbSaveForm = (changeItem) => {
    let newItem = this.state.itemsList;
    this.state.selectedBtnForm
      ? newItem.push(changeItem)
      : newItem.forEach((item, index) => {
          item.code === changeItem.code && (newItem[index] = changeItem);
        });
    this.setState({ itemsList: newItem, selectedBtnForm: null, isClickColor: false, selectedItem: null });
  };
  render() {
    let shopName = this.state.itemsList.map((item) => {
      return (
        <div key={item.code} className="component">
          <span className="nameShop">{item.shop}</span>
          <Item
            item={item}
            cbSelectedItem={this.cbSelectedItem}
            cbDeleteItemFn={this.cbDeleteItemFn}
            cbOpenFormFn={this.cbOpenFormFn}
            cbCancelForm={this.cbCancelForm}
            color={this.state.selectedItem && this.state.selectedItem.code === item.code ? "red" : "gray"}
            isBtnDisabled={this.state.isBtnDisabled}
            isClickColor={this.state.isClickColor}
          />
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
            selectedItem={this.state.selectedItem}
            arrImg={this.state.arrImg}
            cbisClickColor={this.cbisClickColor}
          />
        )}
        {this.state.isOpenDescription && <ItemDescription selectedItem={this.state.selectedItem} />}
      </Fragment>
    );
  }
}
export default Shop;
