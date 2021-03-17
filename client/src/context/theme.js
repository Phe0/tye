import React, { createContext, useState, useEffect } from "react";
import MoonIcon from "../assets/moonIcon";
import SunIcon from "../assets/sunIcon";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const value = localStorage.getItem("theme");
    console.log(value);
    if (value === "dark" || value === "light") {
      setTheme(value);
    }
  }, []);

  function changeTheme(value) {
    localStorage.setItem("theme", value);
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
