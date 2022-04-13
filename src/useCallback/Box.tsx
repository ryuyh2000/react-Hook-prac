import React from "react";

interface BoxType {
  size: {
    width: string;
    height: string;
    backgroundColor: string;
  };
}

const Box: React.FC<BoxType> = ({ size }) => {
  return (
    <>
      <div></div>
    </>
  );
};

export default Box;
