import React from "react";

let withRainbowFrame = (colors) => (Component) => (props) => {
  let comp = <Component {...props} />;

  for (const color of colors) {
    comp = (
      <div className="border" style={{ borderColor: color }}>
        {comp}
      </div>
    );
  }
  return <div className="DoubleButton">{comp}</div>;
};

export { withRainbowFrame };
