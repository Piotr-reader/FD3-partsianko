const Shop = React.createClass({
  displayName: "Shop",

  propTypes: {
    startItem: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        shop: React.PropTypes.string.isRequired,
      })
    ),
  },
  getInitialState: function () {
    return {
      item: this.props.startItem.slice(),
      selectedItemCode: "",
    };
  },
  cbSelectedItem: function (EO) {
    let code = EO.target.getAttribute("data");
    this.setState({ selectedItemCode: code }, this.changeColor);
  },
  changeColor: function () {
    console.log(+this.state.selectedItemCode);
  },
  render: function () {
    let shopName = this.state.item.map((item) => {
      return React.DOM.div(
        { key: item.code, className: "component", onClick: this.cbSelectedItem },
        React.DOM.span({ className: "nameShop" }, item.shop),
        React.createElement(Item, { startItem: item })
      );
    });
    return React.DOM.div({ className: "Shop" }, shopName);
  },
});
