import React from "react";
import "./withTultipHOF.css";
const withTultipHOF = (tultip, delay) => (Component) => {
  class withTultipHOF extends React.Component {
    state = {
      isOpenTultip: false,
    };
    // componentDidMount() {
    //   console.log("mount");
    // }
    // componentDidUpdate() {
    //   console.log("update");
    // }
    mouseOver = (EO) => {
      EO.stopPropagation();
      setTimeout(() => {
        this.setState({ isOpenTultip: true });
      }, delay);
    };
    mouseOut = (EO) => {
      EO.stopPropagation();
      this.setState({ isOpenTultip: false });
    };
    closeTultip = (EO) => {
      EO.stopPropagation();
      this.setState({ isOpenTultip: false });
    };
    render() {
      return (
        <div className="withTultipHOF border" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...this.props} />
          {this.state.isOpenTultip && <div onClick={this.closeTultip}>{tultip}</div>}
        </div>
      );
    }
  }
  withTultipHOF.displayNmae = `withTultipHOF(${"Component"})`;
  return withTultipHOF;
};

export { withTultipHOF };
