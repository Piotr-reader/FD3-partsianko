const Item = React.createClass({
  displayName: "Item",

  propTypes: {
    startItem: React.PropTypes.object.isRequired,
    cbSelectedItem: React.PropTypes.func.isRequired,
    color: React.PropTypes.string.isRequired,
  },

  changecolor: function (EO) {
    this.props.cbSelectedItem(this.props.startItem.code);
  },

  render: function () {
    var itemCode = React.DOM.div(
      { key: this.props.startItem.code, className: "NameItem" },
      React.DOM.span({ className: "Name" }, this.props.startItem.item),
      React.DOM.span({ className: "Quantity" }, this.props.startItem.quantity + "шт"),
      React.DOM.img({ className: "Img", src: this.props.startItem.img, alt: "img" }),
      React.DOM.span({ className: "Price" }, this.props.startItem.price + "руб")
    );

    return React.DOM.div(
      {
        className: "Item",
        data: this.props.startItem.code,
        style: { backgroundColor: this.props.color },
        onClick: this.changecolor,
      },
      itemCode
    );
  },
});
