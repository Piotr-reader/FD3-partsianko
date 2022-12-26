const Shop = React.createClass({
  displayName: "Shop",

  propTypes: {
    goods: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        shop: React.PropTypes.string.isRequired,
      })
    ),
  },

  render: function () {
     let shopName=this.props.goods.map((item) => React.DOM.span({ key: item.code, className: "nameShop" }, item.shop));

    return React.DOM.div({ className: "Shop" },shopName);
  },
});
