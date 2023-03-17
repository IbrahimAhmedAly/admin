import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INTIAL_STATE = {
  darkMode: false,
};

export const DarkModecontext = createContext(INTIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INTIAL_STATE);

  return (
    <DarkModecontext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModecontext.Provider>
  );
};
