import React from "react";
import PropTypes from "prop-types";

import "./ItemDescription.css";

class ItemDescription extends React.Component {
  static propTypes = {
    selectedItem: PropTypes.object,
  };
  render() {
    const { selectedItem } = this.props;
    let itemDescription = (
      <div>
        <h2 className="Name">{selectedItem.item}</h2>
        <p className="Quantity">{selectedItem.quantity + "шт"}</p>
        <p className="Price">{selectedItem.price + "руб"}</p>
      </div>
    );

    return <div className="ItemDescription">{itemDescription}</div>;
  }
}

export default ItemDescription;
