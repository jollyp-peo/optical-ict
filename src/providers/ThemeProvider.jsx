"use client";

import { createContext, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const value = {
    theme: "light",
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () =>
  useContext(ThemeContext);