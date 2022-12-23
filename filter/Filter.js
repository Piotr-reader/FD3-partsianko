const Filter = React.createClass({
  displayName: "Filter",
  propTypes: {
    string: React.PropTypes.array.isRequired,
    defVal: React.PropTypes.bool.isRequired,
    defvaltext: React.PropTypes.string.isRequired,
  },
  getInitialState: function () {
    return {
      cnt: this.props.string,
      checkBoxVal: this.props.defVal,
      textVal: this.props.defvaltext,
    };
  },
  sortArr: function (e) {
    if (e.target.checked) {
      this.state.checkBoxVal = true;
      this.setState({ cnt: this.state.cnt.sort() });
    } else {
      this.state.checkBoxVal = false;
      this.setState({ cnt: this.state.cnt });
    }
  },

  validArr: function (EO) {
    let newStr = [];
    this.props.string.map((item) => {
      var re = new RegExp(EO.target.value);
      if (item.match(re)) {
        newStr.push(item);
      }
    });
    this.setState({ cnt: newStr }, this.sortArr);
  },
  resetFn: function () {
    this.setState({ checkBoxVal: false, textVal: "" });
  },
  textAreaChange: function () {},
  render: function () {
    return React.DOM.div(
      { className: "Filter" },
      React.DOM.input({ className: "checkbox", type: "checkbox", defaultChecked: this.state.checkBoxVal, onClick: this.sortArr }),
      React.DOM.input({ className: "textInput", type: "text", defaultValue: this.state.textVal, onChange: this.validArr }),
      React.DOM.input({ type: "button", defaultValue: "сброс", onClick: this.resetFn }),
      React.DOM.div(null, React.DOM.textarea({ className: "text", value: this.state.cnt.join("\n"), onChange: this.textAreaChange }))
    );
  },
});
