import React from "react";
import PropTypes from "prop-types";

import "./FormAdd.css";

class FormAdd extends React.Component {
  static propTypes = {
    cbCancelForm: PropTypes.func.isRequired,
    cbSaveForm: PropTypes.func.isRequired,
    cbDisabledBtns: PropTypes.func.isRequired,
    cbisClickColor: PropTypes.func.isRequired,
    selectedItemFormat: PropTypes.object.isRequired,
    itemsList: PropTypes.array.isRequired,
  };
  state = {
    code: this.props.selectedItemFormat.code,
    textShop: this.props.selectedItemFormat.shop,
    textItem: this.props.selectedItemFormat.item,
    textQuantity: this.props.selectedItemFormat.quantity,
    textPrice: this.props.selectedItemFormat.price,
    selectImg: this.props.selectedItemFormat.img,
    isDisabledBtnSave: true,
  };
  componentDidUpdate() {
    if (this.props.selectedItemFormat.code !== this.state.code) {
      this.setState({
        code: this.props.selectedItemFormat.code,
        textShop: this.props.selectedItemFormat.shop,
        textItem: this.props.selectedItemFormat.item,
        textQuantity: this.props.selectedItemFormat.quantity,
        textPrice: this.props.selectedItemFormat.price,
        selectImg: this.props.selectedItemFormat.img,
      });
      return true;
    }
  }

  textShopRef = React.createRef();
  textItemRef = React.createRef();
  textQuantityRef = React.createRef();
  textPriceRef = React.createRef();
  selectImgRef = React.createRef();
  flag = () => {
    let flag = true;
    this.state.textItem && this.state.textQuantity && this.state.textPrice && (flag = false);
    this.setState({ isDisabledBtnSave: flag });
  };

  handleChange = () => {
    this.props.cbDisabledBtns();
    this.props.cbisClickColor();
    this.setState(
      {
        textShop: this.textShopRef.current.value,
        textItem: this.textItemRef.current.value,
        textQuantity: this.textQuantityRef.current.value,
        textPrice: this.textPriceRef.current.value,
        selectImg: this.selectImgRef.current.value,
      },
      this.flag
    );
  };
  cancelForm = () => {
    this.props.cbCancelForm();
  };
  saveFormBtn = () => {
    let changeItem = {
      shop: this.state.textShop,
      item: this.state.textItem,
      code: this.props.selectedItemFormat.code,
      price: this.state.textPrice,
      quantity: this.state.textQuantity,
      img: this.state.selectImg,
    };
    this.props.cbCancelForm();
    this.props.cbSaveForm(changeItem);
  };
  render() {
    const options = this.props.itemsList.map((item) => {
      return (
        <option key={item.code} value={item.img}>
          {item.item}
        </option>
      );
    });

    let form = (
      <form>
        <h4>ID: {this.state.code}</h4>
        <label>
          Магазин:
          <input ref={this.textShopRef} type="text" value={this.state.textShop} onChange={this.handleChange} />
        </label>
        {!this.state.textShop && <span> Укажите название магазина</span>}
        <br />
        <label>
          Товар:
          <input ref={this.textItemRef} type="text" value={this.state.textItem} onChange={this.handleChange} />
        </label>
        {!this.state.textItem && <span> Укажите название товара</span>}
        <br />
        <label>
          Количество:
          <input ref={this.textQuantityRef} type="text" value={this.state.textQuantity} onChange={this.handleChange} />
        </label>
        {!this.state.textQuantity && <span> Укажите количество товара</span>}
        <br />
        <label>
          Картинка:
          <select ref={this.selectImgRef} value={this.state.selectImg} onChange={this.handleChange}>
            {options}
          </select>
        </label>
        <br />
        <label>
          Цена:
          <input ref={this.textPriceRef} type="text" value={this.state.textPrice} onChange={this.handleChange} />
        </label>
        {!this.state.textPrice && <span> Укажите цену товара</span>}
      </form>
    );
    return (
      <div className="FormAdd">
        {form}
        <input className="button" type="button" value="Сохранить" onClick={this.saveFormBtn} disabled={this.state.isDisabledBtnSave} />
        <input className="button" type="button" value="Отмена" onClick={this.cancelForm} />
      </div>
    );
  }
}
export default FormAdd;
