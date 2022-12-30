const Shop = React.createClass({
  displayName: "Shop",

  propTypes: {
    startItem: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        shop: React.PropTypes.string.isRequired,
      })
    ),
  },
  getInitialState: function () {
    return {
      item: this.props.startItem.slice(),
      selectedItemCode: "",
      curColor: "",
      isDelete: false,
    };
  },
  cbSelectedItem: function (EO) {
    let code = EO.currentTarget.getAttribute("data");
    let curColor = EO.target.style.backgroundColor;
    this.setState({ selectedItemCode: code, curColor: curColor });
  },
  deleteItemFn: function (EO) {
    EO.stopPropagation();
    let newItem = this.state.item;
    let confirmTrue = confirm("Удалить?");
    if (confirmTrue) {
      newItem.forEach((item) => {
        if (item.code === +EO.target.className) {
          item.isSelected = true;
        }
        this.setState({ item: newItem });
      });
    }
  },
  render: function () {
    let shopName = this.state.item.map((item) => {
      if (!item.isSelected) {
        return React.DOM.div(
          { key: item.code, className: "component", onClick: this.cbSelectedItem, data: item.code },
          React.DOM.span({ className: "nameShop" }, item.shop),
          React.DOM.div(
            { className: "test" },
            React.createElement(Item, { startItem: item, selectedItemCode: +this.state.selectedItemCode, curColor: this.state.curColor }),
            React.DOM.input({ className: item.code, type: "button", value: "Delete", onClick: this.deleteItemFn })
          )
        );
      }
    });
    return React.DOM.div({ className: "Shop" }, shopName);
  },
});
