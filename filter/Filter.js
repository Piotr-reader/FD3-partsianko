const Filter = React.createClass({
  displayName: "Filter",
  propTypes: {
    string: React.PropTypes.array.isRequired,
  },
  getInitialState: function () {
    return {
      text: this.props.string.slice(),
      isSort: false,
      filter: "",
    };
  },
  sortArr: function (e) {
    this.setState({ isSort: e.target.checked }, this.textAreaChange);
  },

  filterArr: function (EO) {
    this.setState({ filter: EO.target.value }, this.textAreaChange);
  },

  resetFn: function () {
    this.setState({ isSort: false, filter: "" }, this.textAreaChange);
  },

  textAreaChange: function () {
    let newStr = [];
    this.state.filter
      ? this.props.string.forEach((item) => {
          if (item.match(new RegExp(this.state.filter))) {
            newStr.push(item);
          }
        })
      : (newStr = this.props.string.slice());

    if (this.state.isSort) {
      newStr = newStr.sort();
    }
    this.setState({ text: newStr });
  },
  Fn: function () {},
  render: function () {
    return React.DOM.div(
      { className: "Filter" },
      React.DOM.div(
        { className: "form" },
        React.DOM.input({ className: "checkbox", type: "checkbox", checked: this.state.isSort, onClick: this.sortArr }),
        React.DOM.input({ className: "textInput", type: "text", value: this.state.filter, onChange: this.filterArr }),
        React.DOM.input({ type: "button", defaultValue: "сброс", onClick: this.resetFn })
      ),
      React.DOM.div(null, React.DOM.textarea({ className: "text", value: this.state.text.join("\n"), onChange: this.Fn }))
    );
  },
});
