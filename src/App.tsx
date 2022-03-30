import React from "react";
import UseReducer from "./UseReducer/UseReducer";
import UseReducerApplication from "./UseReducer/UseReducerApplication";
import UseContext from "./UseContext/UseContext";
import { ThemContext } from "./UseContext/Context";

const App = () => {
  const [boo, setBoo] = React.useState(false);

  const setBoolean = () => {
    setBoo(!boo);
  };

  return (
    <>
      <h1>useReducer</h1>
      <UseReducer />
      <UseReducerApplication />
      <hr />
      <h1>useContext</h1>
      <ThemContext.Provider value={{ boo, setBoo: setBoolean }}>
        <UseContext />
      </ThemContext.Provider>
    </>
  );
};

export default App;
