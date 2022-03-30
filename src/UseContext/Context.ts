import { createContext } from "react";

const asdf = {
  setBoo: () => {},
  boo: false,
};

export const ThemContext = createContext(asdf);
