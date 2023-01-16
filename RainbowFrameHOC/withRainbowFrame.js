import React from "react";
import "./withRainbowFrame.css";
let withRainbowFrame = (colors) => (Component) => (props) => {
  let comp = <Component {...props} />;

  for (const color of colors) {
    comp = (
      <div className="border" style={{ borderColor: color }}>
        {comp}
      </div>
    );
  }
  return <div className="withRainbowFrame">{comp}</div>;
};

export { withRainbowFrame };
