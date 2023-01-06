import React from "react";
import PropTypes from "prop-types";

import "./ItemDescription.css";

class ItemDescription extends React.Component {
  static propTypes = {
    itemsList: PropTypes.array.isRequired,
    selectedItemId: PropTypes.number,
  };
  render() {
    let itemDescription;
    this.props.itemsList.forEach((item) => {
      if (this.props.selectedItemId === item.code) {
        itemDescription = (
          <div>
            <h2 className="Name">{item.item}</h2>
            <p className="Quantity">{item.quantity + "шт"}</p>
            <p className="Price">{item.price + "руб"}</p>
          </div>
        );
      }
    });
    return <div className="ItemDescription">{itemDescription}</div>;
  }
}

export default ItemDescription;
