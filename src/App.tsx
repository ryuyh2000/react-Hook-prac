import React from "react";
import UseReducer from "./UseReducer/UseReducer";
import UseReducerApplication from "./UseReducer/UseReducerApplication";
import UseContext from "./UseContext/UseContext";
import { ThemContext, basicData } from "./UseContext/Context";

const App = () => {
  return (
    <>
      <h1>useReducer</h1>
      <UseReducer />
      <UseReducerApplication />
      <hr />
      <h1>useContext</h1>
      <ThemContext.Provider
        value={{ boolean: basicData.boolean, name: basicData.name }}
      >
        <UseContext />
      </ThemContext.Provider>
      <hr />

    </>
  );
};

export default App;
