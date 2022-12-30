import React from "react";
import PropTypes from "prop-types";
import DOM from "react-dom-factories";

import "./Item.css";

class Item extends React.component {
  static propTypes = {
    startItem: PropTypes.object.isRequired,
    selectedItemCode: PropTypes.number.isRequired,
    curColor: PropTypes.string.isRequired,
  };
  state = {
    colorItem: "gray",
  };
  changecolor = () => {
    let color = "gray";
    if (this.props.selectedItemCode === this.props.startItem.code && this.props.curColor !== "red") {
      color = "red";
    }
    this.state.colorItem = color;
  };

  render() {
    this.changecolor();

    let itemCode = DOM.div(
      { key: this.props.startItem.code, className: "NameItem", data: this.props.startItem.code, style: { backgroundColor: this.state.colorItem } },
      DOM.span({ className: "Name" }, this.props.startItem.item),
      DOM.span({ className: "Quantity" }, this.props.startItem.quantity + "шт"),
      DOM.img({ className: "Img", src: this.props.startItem.img, alt: "img" }),
      DOM.span({ className: "Price" }, this.props.startItem.price + "руб")
    );

    return DOM.div({ className: "Item" }, itemCode);
  }
}
export default Item;
