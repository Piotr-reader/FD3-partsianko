const Item = React.createClass({
  displayName: "Item",

  propTypes: {
    startItem: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        quantity: React.PropTypes.number.isRequired,
        img: React.PropTypes.string.isRequired,
        item: React.PropTypes.string.isRequired,
        isSelected: React.PropTypes.bool.isRequired,
      })
    ),
  },
  getInitialState: function () {
    return {
      // changeColor: color,
      selectedItemCode: "",
      deleteItem: this.props.startItem.slice(),
    };
  },
  changeColor: function (EO) {
    this.state.deleteItem.forEach((item) => {
      if (item.code === +EO.target.className) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    });
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
    // let newItem = this.state.deleteItem;
    // let confirmTrue = confirm("Удалить?");
    // if (confirmTrue) {
    //   newItem.forEach((item, index) => {
    //     if (item.code === +EO.target.className) {
    //       delete newItem[index];
    //     }
    //     this.setState({ deleteItem: newItem });
    //   });
    // }
  },

  render: function () {
    var itemCode = this.state.deleteItem.map((item) =>
      React.DOM.div(
        { key: item.code, className: "Item", onClick: this.changeColor },
        React.DOM.span({ className: "Name" }, item.item),
        React.DOM.span({ className: "Quantity" }, item.quantity + "шт"),
        React.DOM.img({ className: "Img", src: item.img, alt: "img" }),
        React.DOM.span({ className: "Price" }, item.price + "руб"),
        React.DOM.input({ className: item.code, type: "button", value: "Delete", onClick: this.deleteItem })
      )
    );
    return React.DOM.div({ className: "Item" }, React.DOM.div({ className: "Items" }, itemCode));
  },
});
