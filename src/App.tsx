import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Page1 from "./Page/Page1";
import Page2 from "./Page/Page2";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
      </Routes>
      <NavBar />
    </>
  );
};

export default App;
