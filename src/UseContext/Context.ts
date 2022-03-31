import React, { createContext } from "react";

export const basicData ={
  boolean:true,
  name:'찬호'
}


export const ThemContext = createContext(basicData);
