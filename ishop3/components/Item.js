import React from "react";
import PropTypes from "prop-types";

import "./Item.css";

class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    cbSelectedItem: PropTypes.func.isRequired,
    cbDeleteItemFn: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
  };

  changecolor = (EO) => {
    this.props.cbSelectedItem(this.props.item.code);
  };
  deleteItemFn = (EO) => {
    EO.stopPropagation();
    this.props.cbDeleteItemFn(this.props.item.code);
  };
  itemCode = (
    <div key={this.props.item.code} className="NameItem">
      <span className="Name">{this.props.item.item}</span>
      <span className="Quantity">{this.props.item.quantity + "шт"}</span>
      <img className="Img" src={this.props.item.img} alt="img" />
      <span className="Price">{this.props.item.price + "руб"}</span>
      <input className={this.props.item.code} type="button" value="Delete" onClick={this.deleteItemFn} disabled={false} />
    </div>
  );
  render() {
    return (
      <div className="Item" data={this.props.item.code} style={{ backgroundColor: this.props.color }} onClick={this.changecolor}>
        {this.itemCode}
      </div>
    );
  }
}
export default Item;
