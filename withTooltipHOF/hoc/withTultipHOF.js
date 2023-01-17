import React from "react";
import "./withTultipHOF.css";
const withTultipHOF = (tultip, delay) => (Component) => (props) => {
  return (
    <div className="withTultipHOF border" style={{ borderColor: "red" }}>
      <Component {...props} />
      {tultip}
    </div>
  );
};

export { withTultipHOF };
