const Item = React.createClass({
  displayName: "Item",

  propTypes: {
    item: React.PropTypes.object.isRequired,
    cbSelectedItem: React.PropTypes.func.isRequired,
    cbDeleteItemFn: React.PropTypes.func.isRequired,
    color: React.PropTypes.string.isRequired,
  },

  changecolor: function () {
    return this.props.cbSelectedItem(this.props.item.code);
  },
  deleteItemFn: function (EO) {
    EO.stopPropagation();
    this.props.cbDeleteItemFn(this.props.item.code);
  },
  render: function () {
    var itemCode = React.DOM.div(
      { key: this.props.item.code, className: "NameItem" },
      React.DOM.span({ className: "Name" }, this.props.item.item),
      React.DOM.span({ className: "Quantity" }, this.props.item.quantity + "шт"),
      React.DOM.img({ className: "Img", src: this.props.item.img, alt: "img" }),
      React.DOM.span({ className: "Price" }, this.props.item.price + "руб"),
      React.DOM.input({ className: this.props.item.code, type: "button", value: "Delete", onClick: this.deleteItemFn })
    );

    return React.DOM.div(
      {
        className: "Item",
        data: this.props.item.code,
        style: { backgroundColor: this.props.color },
        onClick: this.changecolor,
      },
      itemCode
    );
  },
});
