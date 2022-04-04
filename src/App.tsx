import React from "react";
import UseReducer from "./UseReducer/UseReducer";
import UseReducerApplication from "./UseReducer/UseReducerApplication";
import UseContext from "./UseContext/UseContext";
import { ThemContext, basicData } from "./UseContext/Context";
import UseMemo from "./UseMemo/UseMemo";
import NotUseMemo from "./UseMemo/NotUseMemo";

const App = () => {
  return (
    <>
      <h1>useReducer</h1>
      <UseReducer />
      <UseReducerApplication />
      <hr />

      <h1>useContext</h1>
      <ThemContext.Provider value={{ boolean: false, name: "인욱" }}>
        <UseContext />
      </ThemContext.Provider>
      <hr />

      <h1>UseMemo</h1>
      <UseMemo />
      <NotUseMemo />
    </>
  );
};

export default App;
