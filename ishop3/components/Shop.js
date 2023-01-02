import React from "react";
import PropTypes from "prop-types";

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
    item: this.props.startItem,
    selectedItemId: NaN,
    selectedItemOld: NaN,
  };
  selectedItem = (code) => {
    let select = this.state.selectedItemId;
    this.setState({ selectedItemId: code, selectedItemOld: select });
    if (this.state.selectedItemId === this.state.selectedItemOld) {
      this.setState({ selectedItemOld: NaN });
    }
  };

  cbDeleteItemFn = (code) => {
    let newItem = this.state.item;
    let confirmTrue = confirm("Удалить?");
    if (confirmTrue) {
      newItem.filter((item) => {
        item.code === code ? (item.isSelected = true) : null;
      });
      this.setState({ item: newItem });
    }
  };

  render() {
    let color = "";
    let shopName = this.state.item.map((item) => {
      if (!item.isSelected) {
        return (
          <div key={item.code} className="component">
            <span className="nameShop">{item.shop}</span>
            <div className="test">
              <Item
                startItem={item}
                cbSelectedItem={this.selectedItem}
                cbDeleteItemFn={this.cbDeleteItemFn}
                color={this.state.selectedItemId !== this.state.selectedItemOld && this.state.selectedItemId === item.code ? (color = "red") : (color = "gray")}
              />
            </div>
          </div>
        );
      }
    });

    return <div className="Shop">{shopName}</div>;
  }
}
export default Shop;
