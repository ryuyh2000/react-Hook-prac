import React from "react";
import { ThemContext } from "./Context";

const UseContextApplication = () => {
  let { setBoo, boo } = React.useContext(ThemContext);

  const changeBoolean = () => {
    setBoo();
  };

  return (
    <>
      {String(boo)}
      <button onClick={changeBoolean}>Change Boolean</button>
    </>
  );
};

export default UseContextApplication;
