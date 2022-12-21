const Filter = React.createClass({
  displayName: "Filter",
  propTypes: {
    string: React.PropTypes.array.isRequired,
    // cbvalidArr: React.PropTypes.func.isRequired,
  },

  sortArr: function (e) {
    if (e.target.defaultChecked) {
      console.log(this.props.string.sort());
      return (this.props.string = this.props.string.sort());
    } else {
      console.log(this.props.string);
      return (this.props.string = this.props.string);
    }
    // this.setState({ string: this.props.string.sort() });
  },
  validArr: function (EO) {
    let newStr = [];
    this.props.string.map((item) => {
      var re = new RegExp(EO.target.value);
      if (item.match(re)) {
        newStr.push(item);
      }
    });
    console.log(newStr);
    this.setState({ string: (this.props.string = newStr) });
  },
  resetFn: function () {
    const checkbox = document.querySelector(".checkbox");
    checkbox.checked = false;
    const textInput = document.querySelector(".textInput");
    textInput.value = "";
  },
  render: function () {
    return React.DOM.div(
      { className: "Filter" },
      React.DOM.input({ className: "checkbox", type: "checkbox", defaultChecked: false, onChange: this.sortArr }),
      React.DOM.input({ className: "textInput", type: "text", defaultValue: "", onChange: this.validArr }),
      React.DOM.input({ type: "button", defaultValue: "сброс", onClick: this.resetFn }),
      React.DOM.div(null, React.DOM.textarea({ className: "text", defaultValue: this.props.string.join("\n") }))
    );
  },
});
