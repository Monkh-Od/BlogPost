import React, { createContext, useState } from "react";

export const ColorModeContext = createContext();

export const ThemeContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [color, setColor] = useState("light");
  const ColorHandler = () => {
    isDark ? setColor("light") : setColor("dark");
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };
  return (
    <ColorModeContext.Provider
      value={{
        changeTheme: ColorHandler,
        color,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
