const Item = React.createClass({
  displayName: "Item",

  propTypes: {
    startItem: React.PropTypes.object.isRequired,
    selectedItemCode: React.PropTypes.number.isRequired,
    curColor: React.PropTypes.string.isRequired,
  },
  getInitialState: function () {
    return {
      colorItem: "gray",
    };
  },
  changecolor: function () {
    let color = "gray";
    if (this.props.selectedItemCode === this.props.startItem.code && this.props.curColor !== "red") {
      color = "red";
    }
    this.state.colorItem = color;
  },

  render: function () {
    this.changecolor();

    var itemCode = React.DOM.div(
      { key: this.props.startItem.code, className: "NameItem", data: this.props.startItem.code, style: { backgroundColor: this.state.colorItem } },
      React.DOM.span({ className: "Name" }, this.props.startItem.item),
      React.DOM.span({ className: "Quantity" }, this.props.startItem.quantity + "шт"),
      React.DOM.img({ className: "Img", src: this.props.startItem.img, alt: "img" }),
      React.DOM.span({ className: "Price" }, this.props.startItem.price + "руб")
    );

    return React.DOM.div({ className: "Item" }, itemCode);
  },
});
