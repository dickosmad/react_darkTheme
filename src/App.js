import "./styles.css";
import React, { useState } from "react";
import ClassContextComponent from "./ClassContextComponent";

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}> Toggle Theme </button>
        <ClassContextComponent />
      </ThemeContext.Provider>
    </div>
  );
}
