import React from "react";

interface ToDosType {
  dispatch: Function;
  res: string;
}

const ToDos: React.FC<ToDosType> = ({ dispatch, res }) => {
  return (
    <>
      <li>
        {res}
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "delete", todo: res });
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default ToDos;
