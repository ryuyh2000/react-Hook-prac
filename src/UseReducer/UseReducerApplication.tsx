import React, { useReducer } from "react";
import ToDos from "./ToDos";

interface toDoReducerType {
  type: string;
  todo: string;
}

const toDoReducer = (state: string[], action: toDoReducerType): string[] => {
  const newState = [...state];

  if (action.type === "add") {
    newState.push(action.todo);
    return newState;
  } else if (action.type === "delete") {
    const changeState = newState.filter((old) => old !== action.todo);
    return changeState;
  }
  return state;
};

const UseReducerApplication = () => {
  const [text, setText] = React.useState("");
  const [toDoList, dispatch] = useReducer(toDoReducer, []);

  const typeToDo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  return (
    <>
      <h2>To Do</h2>
      <h3>How Many To Do : {toDoList.length}</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add", todo: text });
          setText("");
        }}
      >
        <input
          type="text"
          placeholder="Type To Do"
          value={text}
          onChange={typeToDo}
        />
      </form>
      <ul>
        {toDoList.map((res, index) => (
          <React.Fragment key={index}>
            <ToDos dispatch={dispatch} res={res} />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default UseReducerApplication;

/*

import React, { useReducer } from "react";

interface toDoReducerType {
  type: string;
  zxcv: string;
}

const toDoReducer = (state: string[], action: toDoReducerType): string[] => {
  const newState = [...state];

  if (action.type === "add") {
    newState.push(action.zxcv);
    return newState;
  } else if (action.type === "delete") {
    const changeState = newState.filter((old) => old !== action.zxcv);
    return changeState;
  }
  return state;
};

const UseReducerApplication = () => {
  const [text, setText] = React.useState("");
  const [asdf, setAsdf] = useReducer(toDoReducer, []);

  const typeToDo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  return (
    <>
      <h2>To Do</h2>
      <h3>How Many To Do : {asdf.length}</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAsdf({ type: "add", zxcv: text });
        }}
      >
        <input
          type="text"
          placeholder="Type To Do"
          value={text}
          onChange={typeToDo}
        />
      </form>
      <ul>
        {asdf.map((res, index) => (
          <React.Fragment key={index}>
            <li>
              {res}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setAsdf({ type: "delete", zxcv: res });
                }}
              >
                Delete
              </button>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default UseReducerApplication;

/*
  add,delete function to List To Do
  count To Do list
*/
