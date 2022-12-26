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
    };
  },
  cbSelectedItem: function (code) {
    this.setState({ selectedItemCode: code });
    console.log(selectedItemCode);
  },

  render: function () {
    let shopName = this.state.item.map((item) =>
      React.DOM.div(
        { key: item.code, className: "component" },
        React.DOM.span({ key: item.code, className: "nameShop" }, item.shop),
        React.createElement(Item, { startItem: this.props.startItem, shop: item.shop })
      )
    );

    return React.DOM.div({ className: "Shop" }, shopName);
  },
});
