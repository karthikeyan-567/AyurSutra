import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // default

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === "dark" ? "dark bg-gray-900 text-white min-h-screen" : "light bg-green-50 text-gray-900 min-h-screen"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
