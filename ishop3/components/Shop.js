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
    isFormOpen: false,
    isBtnDisabled: false
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
  cbOpenFormFn = () => {
    this.setState({ isFormOpen: true,isBtnDisabled: true, selectedItemId: -1});
  };
  cbCancelForm = () => {
    this.setState({ isFormOpen: false,isBtnDisabled: false});
  };
  render() {
    let color = "";
    let form;
    this.state.isFormOpen && (form = <FormAdd cbCancelForm={this.cbCancelForm} />)
    let shopName = this.state.itemsList.map((item) => {
      return (
        <div key={item.code} className="component">
          <span className="nameShop">{item.shop}</span>
          <div className="test">
            <Item
              item={item}
              cbSelectedItem={this.cbSelectedItem}
              cbDeleteItemFn={this.cbDeleteItemFn}
              cbOpenFormFn={this.cbOpenFormFn}
              color={this.state.selectedItemId === item.code ? (color = "red") : (color = "gray")}
              isBtnDisabled={this.state.isBtnDisabled}
            />
          </div>
        </div>
      );
    });


    return (
      <Fragment>
        <div className="Shop">{shopName}</div>
        <input className="button" type="button" value="Новый" onClick={this.cbOpenFormFn} disabled={this.state.isBtnDisabled}/>
        <div className="Form">{form}</div>
      </Fragment>
    );
  }
}
export default Shop;
