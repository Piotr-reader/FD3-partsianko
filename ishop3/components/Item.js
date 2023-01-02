import React from "react";
import PropTypes from "prop-types";

import "./Item.css";

class Item extends React.Component {
  static propTypes = {
    startItem: PropTypes.object.isRequired,
    cbSelectedItem: PropTypes.func.isRequired,
    cbDeleteItemFn: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
  };

  changecolor = (EO) => {
    this.props.cbSelectedItem(this.props.startItem.code);
  };
  deleteItemFn = (EO) => {
    EO.stopPropagation();
    this.props.cbDeleteItemFn(this.props.startItem.code);
  };
  itemCode = (
    <div key={this.props.startItem.code} className="NameItem">
      <span className="Name">{this.props.startItem.item}</span>
      <span className="Quantity">{this.props.startItem.quantity + "шт"}</span>
      <img className="Img" src={this.props.startItem.img} alt="img" />
      <span className="Price">{this.props.startItem.price + "руб"}</span>
      <input className={this.props.startItem.code} type="button" value="Delete" onClick={this.deleteItemFn} />
    </div>
  );
  render() {
    return (
      <div className="Item" data={this.props.startItem.code} style={{ backgroundColor: this.props.color }} onClick={this.changecolor}>
        {this.itemCode}
      </div>
    );
  }
}
export default Item;
