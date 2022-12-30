import React from "react";
import PropTypes from "prop-types";
import DOM from "react-dom-factories";

import "./Shop.css";
import Item from "./Item";

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
    item: this.props.startItem.slice(),
    selectedItemCode: "",
    curColor: "",
    isDelete: false,
  };
  cbSelectedItem = (EO) => {
    let code = EO.currentTarget.getAttribute("data");
    let curColor = EO.target.style.backgroundColor;
    this.setState({ selectedItemCode: code, curColor: curColor });
  };
  deleteItemFn = (EO) => {
    EO.stopPropagation();
    let newItem = this.state.item;
    let confirmTrue = confirm("Удалить?");
    if (confirmTrue) {
      newItem.forEach((item) => {
        if (item.code === +EO.target.className) {
          item.isSelected = true;
        }
        this.setState({ item: newItem });
      });
    }
  };
  render() {
    let shopName = this.state.item.map((item) => {
      if (!item.isSelected) {
        return DOM.div(
          { key: item.code, className: "component", onClick: this.cbSelectedItem, data: item.code },
          DOM.span({ className: "nameShop" }, item.shop),
          DOM.div(
            { className: "test" },
            createElement(Item, { startItem: item, selectedItemCode: +this.state.selectedItemCode, curColor: this.state.curColor }),
            DOM.input({ className: item.code, type: "button", value: "Delete", onClick: this.deleteItemFn })
          )
        );
      }
    });
    return DOM.div({ className: "Shop" }, shopName);
  }
}
export default Shop;
