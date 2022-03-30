import React, { useReducer } from "react";
import ToDos from "./ToDos";

interface toDoReducerType {
  type: string;
  todo: string;
}

interface actionType {
  type: string;
  count: number;
}

const reducer = (state: number, action: actionType): number => {
  if (action.type === "up") {
    return state + 1;
  } else {
    return state;
  }
};

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
