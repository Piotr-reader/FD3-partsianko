const Shop = React.createClass({
  displayName: "Shop",

  propTypes: {
    shops: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        shop: React.PropTypes.string.isRequired,
      })
    ),
  },

  render: function () {
    var shopName = this.props.shops.map((item) => React.DOM.span({ key: item.code, className: "nameShop" }, item.shop));

    return React.DOM.div({ className: "Shop" }, shopName);
  },
});
