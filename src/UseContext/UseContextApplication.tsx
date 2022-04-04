import React from "react";
import { ThemContext } from "./Context";

const reducer = (state: string, action: string): string => {
  if (action === "찬호") {
    state = "찬호";
    return state;
  } else {
    state = "인욱";
    return state;
  }
};

const UseContextApplication = () => {
  const { boolean, name } = React.useContext(ThemContext);
  const [boo, setBoo] = React.useState(boolean);
  const [state, dispatch] = React.useReducer(reducer, name);

  return (
    <>
      <button
        onClick={() => {
          setBoo(!boo);
          if (boo) {
            dispatch("인욱");
          } else {
            dispatch("찬호");
          }
        }}
      >
        change info
      </button>
      {String(boo)}
      {state}
    </>
  );
};

export default UseContextApplication;
