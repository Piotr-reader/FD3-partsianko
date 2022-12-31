import React from "react";
import PropTypes from "prop-types";
import DOM from "react-dom-factories";

import "./Item.css";

class Item extends React.Component {
  static propTypes = {
    startItem: PropTypes.object.isRequired,
    // selectedItemCode: PropTypes.number.isRequired,
  };
  state = {
    colorItem: "gray",
  };
  changecolor = (EO) => {
    let color = "gray";

    if (EO.currentTarget.style.backgroundColor !== "red") {
      color = "red";
    }
    this.setState({ colorItem: color });
  };

  render() {
    let itemCode = DOM.div(
      { key: this.props.startItem.code, className: "NameItem", data: this.props.startItem.code },
      DOM.span({ className: "Name" }, this.props.startItem.item),
      DOM.span({ className: "Quantity" }, this.props.startItem.quantity + "шт"),
      DOM.img({ className: "Img", src: this.props.startItem.img, alt: "img" }),
      DOM.span({ className: "Price" }, this.props.startItem.price + "руб")
    );

    return DOM.div(
      {
        className: "Item",
        data: this.props.startItem.code,
        style: { backgroundColor: this.state.colorItem },
        onClick: this.changecolor,
      },
      itemCode
    );
  }
}
export default Item;
