import React, { useReducer } from "react";

interface actionType {
  type: string;
  num: number;
}

const ACTION = {
  up: "up",
  down: "down",
};

const countReducer = (state: number, action: actionType): number => {
  if (action.type === "up") {
    return state + action.num;
  } else if (action.type === "down") {
    return state - action.num;
  } else {
    return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(countReducer, 0);
  const [money, setMoney] = React.useState(0);
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "up", num: money });
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch({ type: "down", num: money });
        }}
      >
        -
      </button>

      <input
        type="number"
        onChange={(e) => {
          setMoney(Number(e.target.value));
        }}
        step="1000"
      ></input>

      <span>{state}</span>
    </>
  );
};

export default UseReducer;
