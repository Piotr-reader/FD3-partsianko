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
      item: this.props.startItem,
      selectedItemId: NaN,
      selectedItemOld: NaN,
    };
  },
  selectedItem: function (code) {
    let select = this.state.selectedItemId;
    this.setState({ selectedItemId: code, selectedItemOld: select });
    if (this.state.selectedItemId === this.state.selectedItemOld) {
      this.setState({ selectedItemOld: NaN });
    }
  },
  deleteItemFn: function (EO) {
    EO.stopPropagation();
    let newItem = this.state.item;
    let confirmTrue = confirm("Удалить?");
    if (confirmTrue) {
      newItem.filter((item) => {
        item.code === +EO.target.className ? (item.isSelected = true) : null;
      });
      this.setState({ item: newItem });
    }
  },
  render: function () {
    let color = "";
    let shopName = this.state.item.map((item) => {
      if (!item.isSelected) {
        return React.DOM.div(
          { key: item.code, className: "component", onClick: this.cbSelectedItem, data: item.code },
          React.DOM.span({ className: "nameShop" }, item.shop),
          React.DOM.div(
            { className: "test" },
            React.createElement(Item, {
              startItem: item,
              cbSelectedItem: this.selectedItem,
              color: this.state.selectedItemId !== this.state.selectedItemOld && this.state.selectedItemId === item.code ? (color = "red") : (color = "gray"),
            }),
            React.DOM.input({ className: item.code, type: "button", value: "Delete", onClick: this.deleteItemFn })
          )
        );
      }
    });
    return React.DOM.div({ className: "Shop" }, shopName);
  },
});
