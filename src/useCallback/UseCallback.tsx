import React from "react";
import Box from "./Box";

const UseCallback = () => {
  const [size, setSize] = React.useState(100);
  const [color, setColor] = React.useState(true);

  const boxStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: `${color}`,
  };

  return (
    <>
      <input
        type="number"
        value={size}
        onChange={(e) => {
          setSize(Number(e.target.value));
        }}
      />
      <Box size={boxStyle} />
      <button
        onClick={() => {
          setColor(!color);
        }}
      >
        change color
      </button>
    </>
  );
};

export default UseCallback;
