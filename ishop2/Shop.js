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
      itemsList: this.props.startItem,
      selectedItemId: NaN,
    };
  },
  cbSelectedItem: function (code) {
    if (this.state.selectedItemId === code) {
      code = -1;
    }
    return this.setState({ selectedItemId: code });
  },
  cbDeleteItemFn: function (code) {
    const { itemsList } = this.state;
    let newItem = [];
    let confirmTrue = confirm("Удалить?");
    if (confirmTrue) {
      for (let item of itemsList) {
        item.code !== code && newItem.push(item);
      }
      this.setState({ itemsList: newItem });
    }
  },
  render: function () {
    let color = "";
    let shopName = this.state.itemsList.map((item) => {
      return React.DOM.div(
        { key: item.code, className: "component", data: item.code },
        React.DOM.span({ className: "nameShop" }, item.shop),
        React.DOM.div(
          { className: "test" },
          React.createElement(Item, {
            item: item,
            cbSelectedItem: this.cbSelectedItem,
            color: this.state.selectedItemId === item.code ? (color = "red") : (color = "gray"),
            cbDeleteItemFn: this.cbDeleteItemFn,
          })
        )
      );
    });
    return React.DOM.div({ className: "Shop" }, shopName);
  },
});
