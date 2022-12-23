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
  changeColor: function (EO) {
    let color = "red";
    if (EO.currentTarget.style.backgroundColor === "red") {
      color = "gray";
    }
    this.setState({ goods: (EO.currentTarget.style.backgroundColor = color) });
  },

  deleteItem: function (e) {
    e.stopPropagation();
    let confirmTrue = confirm("Удалить?");
    if (confirmTrue) {
      var deleter = this.props.goods.map((item, index) => {
        if (item.code === +e.target.className) {
          this.setState({ goods: delete this.props.goods[index] });
        }
      });
    }
  },

  render: function () {
    var goodCode = this.props.goods.map((item) =>
      React.DOM.div(
        { key: item.code, className: "good", onClick: this.changeColor },
        React.DOM.div({ className: "shop" }, this.props.shop),
        React.DOM.span({ className: "Good" }, item.good),
        React.DOM.span({ className: "Quantity" }, item.quantity + "шт"),
        React.DOM.img({ className: "img", src: item.img, alt: "img" }),
        React.DOM.span({ className: "Price" }, item.price + "руб"),
        React.DOM.input({ className: item.code, type: "button", value: "Delete", onClick: this.deleteItem })
      )
    );

    return React.DOM.div(
      { className: "IshopComponent" },
      React.DOM.div({ className: "NameIshop" }, this.props.nameIshop),
      React.DOM.div({ className: "Goods" }, goodCode)
    );
  },
});
