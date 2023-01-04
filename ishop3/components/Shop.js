import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./Shop.css";
import Item from "./Item";
import FormAdd from "./FormAdd";

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
    selectedItemId: NaN,
  };
  cbSelectedItem = (code) => {
    this.state.selectedItemId === code && (code = -1);
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
              color={this.state.selectedItemId === item.code ? (color = "red") : (color = "gray")}
            />
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <div className="Shop">{shopName}</div>
        <FormAdd />
      </Fragment>
    );
  }
}
export default Shop;
