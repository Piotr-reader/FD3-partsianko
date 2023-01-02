import React from "react";
import PropTypes from "prop-types";
import DOM from "react-dom-factories";

import "./Item.css";

class Item extends React.Component {
  static propTypes = {
    startItem: PropTypes.object.isRequired,
    cbSelectedItem: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
  };

  changecolor = (EO) => {
    this.props.cbSelectedItem(this.props.startItem.code);
  };

  render() {
    let itemCode = DOM.div(
      { key: this.props.startItem.code, className: "NameItem" },
      DOM.span({ className: "Name" }, this.props.startItem.item),
      DOM.span({ className: "Quantity" }, this.props.startItem.quantity + "шт"),
      DOM.img({ className: "Img", src: this.props.startItem.img, alt: "img" }),
      DOM.span({ className: "Price" }, this.props.startItem.price + "руб")
    );
//  let itemCode = <div
//       key= {this.props.startItem.code} className= "NameItem">
//       <span className= "Name">{this.props.startItem.item}</span>
//        <span className= "Quantity">{this.props.startItem.quantity + "шт"}</span>
//       <img className= "Img" src={this.props.startItem.img} alt="img" />
//       <span className= "Price">{this.props.startItem.price + "руб"}</span>
//     </div>
    return DOM.div(
      {
        className: "Item",
        data: this.props.startItem.code,
        style: { backgroundColor: this.props.color },
        onClick: this.changecolor,
      },
      itemCode
    );
    // return (
    //   <div className="Item" data={this.props.startItem.code} style={(backgroundColor = this.props.color)} onClick={this.changecolor}>
    //     {itemCode}
    //   </div>
    // );
  }
}
export default Item;
