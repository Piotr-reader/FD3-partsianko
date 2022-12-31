import React from "react";
import PropTypes from "prop-types";
import DOM from "react-dom-factories";

import "./Shop.css";
import "./Item.css";
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
  };

  deleteItemFn = (EO) => {
    EO.stopPropagation();
    let newItem = this.state.item;
    let confirmTrue = confirm("Удалить?");
    if (confirmTrue) {
      newItem.filter((item) => {
        item.code === +EO.target.className ? (item.isSelected = true) : null;
      });
      this.setState({ item: newItem });
    }
  };
  render() {
    let shopName = this.state.item.map((item) => {
      if (!item.isSelected) {
        return DOM.div(
          { key: item.code, className: "component" },
          DOM.span({ className: "nameShop" }, item.shop),
          DOM.div(
            { className: "test" },
            React.createElement(Item, { startItem: item }),
            DOM.input({ className: item.code, type: "button", value: "Delete", onClick: this.deleteItemFn })
          )
        );
      }
    });
    return DOM.div({ className: "Shop" }, shopName);
  }
}
export default Shop;
