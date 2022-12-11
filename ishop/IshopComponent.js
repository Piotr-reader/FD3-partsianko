const IshopComponent = React.createClass({
  displayName: "IshopComponent",

  propTypes: {
    nameIshop: React.PropTypes.string.isRequired,
    goods: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        quantity: React.PropTypes.number.isRequired,
        img: React.PropTypes.string.isRequired,
        good: React.PropTypes.string.isRequired,
      })
    ),
  },

  render: function () {
    var goodCode = this.props.goods.map((item) =>
      React.DOM.div(
        { key: item.code, className: "good" },
        React.DOM.span({ className: "Good" }, item.good),
        React.DOM.span({ className: "Quantity" }, item.quantity + "шт"),
        React.DOM.img({ className: "img", src: item.img, alt: "img" }),
        React.DOM.span({ className: "Price" }, item.price + "руб")
      )
    );
    return React.DOM.div(
      { className: "IshopComponent" },
      React.DOM.div({ className: "NameIshop" }, this.props.nameIshop),
      React.DOM.div({ className: "Goods" }, goodCode)
    );
  },
});
