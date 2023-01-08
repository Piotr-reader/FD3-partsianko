import React from "react";
import PropTypes from "prop-types";

import "./Item.css";

class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    cbSelectedItem: PropTypes.func.isRequired,
    cbDeleteItemFn: PropTypes.func.isRequired,
    cbOpenFormFn: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    isBtnDisabled: PropTypes.bool.isRequired,
    isClickColor: PropTypes.bool.isRequired,
    cbCancelForm: PropTypes.func.isRequired,
  };

  changecolor = () => {
    if (!this.props.isClickColor) {
      if (!this.props.isBtnDisabled) {
        this.props.cbCancelForm();
        this.props.cbSelectedItem(this.props.item, true);
      }
    }
  };
  deleteItemFn = (EO) => {
    EO.stopPropagation();
    this.props.cbDeleteItemFn(this.props.item.code);
  };
  formatFormBtn = (EO) => {
    EO.stopPropagation();
    this.props.cbOpenFormFn(this.props.item);
  };

  render() {
    const itemCode = (
      <div key={this.props.item.code} className="NameItem">
        <span className="Name">{this.props.item.item}</span>
        <span className="Quantity">{this.props.item.quantity + "шт"}</span>
        <img className="Img" src={this.props.item.img} alt="img" />
        <span className="Price">{this.props.item.price + "руб"}</span>
        <span>
          <input className="button" type="button" value="Format" onClick={this.formatFormBtn} disabled={this.props.isBtnDisabled} />
          <input className="button" type="button" value="Delete" onClick={this.deleteItemFn} disabled={this.props.isBtnDisabled} />
        </span>
      </div>
    );

    return (
      <div className="Item" data={this.props.item.code} style={{ backgroundColor: this.props.color }} onClick={this.changecolor}>
        {itemCode}
      </div>
    );
  }
}
export default Item;
