import { createContext, useState } from "react";
import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContextComponent />
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
