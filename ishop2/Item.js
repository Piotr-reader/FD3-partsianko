const Item = React.createClass({
  displayName: "Item",

  propTypes: {
    startItem: React.PropTypes.object.isRequired,
  },
  getInitialState: function () {
    return {
      deleteItem: this.props.startItem,
    };
  },

  deleteItemFn: function (EO) {
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
    if (!this.state.deleteItem.isSelected) {
      var itemCode = React.DOM.div(
        { key: this.props.startItem.code, className: "NameItem", data: this.props.startItem.code },
        React.DOM.span({ className: "Name" }, this.state.deleteItem.item),
        React.DOM.span({ className: "Quantity" }, this.state.deleteItem.quantity + "шт"),
        React.DOM.img({ className: "Img", src: this.state.deleteItem.img, alt: "img" }),
        React.DOM.span({ className: "Price" }, this.state.deleteItem.price + "руб"),
        React.DOM.input({ className: this.state.deleteItem.code, type: "button", value: "Delete", onClick: this.deleteItemFn })
      );
    }

    return React.DOM.div({ className: "Item", data: this.state.deleteItem.isSelected }, itemCode);
  },
});
