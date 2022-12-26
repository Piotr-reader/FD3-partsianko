

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
  getInitialState: function () {
    return {
      // changeColor: color,
      deleteItem: this.props.goods.slice()
    };
  },
  changeColor: function (EO) {
    // const a = document.querySelectorAll(`.${EO.currentTarget.className}`);
    // [...a].forEach((item) => {
    //   if (EO.currentTarget === item && EO.currentTarget.style.backgroundColor === "gray") {
    //     EO.currentTarget.style.backgroundColor = "red";
    //   } else {
    //     item.style.backgroundColor = "gray";
    //   }
    // });
  },

  deleteItem: function (EO) {
    EO.stopPropagation();
    let newGoods = this.state.deleteItem;
    let confirmTrue = confirm("Удалить?");
    if (confirmTrue) {
      newGoods.forEach((item, index) => {
        if (item.code === +EO.target.className) {
          delete newGoods[index]
        }
        this.setState({ deleteItem: newGoods });
      });
    }
  },


  render: function () {

    var goodCode = this.state.deleteItem.map((item) =>
      React.DOM.div(
        { key: item.code, className: "Item", onClick: this.changeColor },
        React.DOM.span({ className: "Name" }, item.good),
        React.DOM.span({ className: "Quantity" }, item.quantity + "шт"),
        React.DOM.img({ className: "Img", src: item.img, alt: "img" }),
        React.DOM.span({ className: "Price" }, item.price + "руб"),
        React.DOM.input({ className: item.code, type: "button", value: "Delete", onClick: this.deleteItem })
      )
    );
    return React.DOM.div(
      { className: "IshopComponent" },
      React.DOM.div({ className: "NameIshop" }, this.props.nameIshop),
      React.DOM.div({ className: "Items" }, goodCode),
    );
  },
});
