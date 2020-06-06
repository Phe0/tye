import React, { createContext, useState } from "react";
import MoonIcon from "../assets/moonIcon";
import SunIcon from "../assets/sunIcon";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function changeTheme(value) {
    setTheme(value);
  }

  return (
    <ThemeContext.Provider value={(theme, setTheme)}>
      <div className={`base ${theme === "dark" ? "dark" : ""}`}>
        {theme === "dark" ? (
          <SunIcon onClick={() => changeTheme("light")} />
        ) : (
          <MoonIcon onClick={() => changeTheme("dark")} />
        )}
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
