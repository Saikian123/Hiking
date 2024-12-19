import { useState } from "react";
import './Task4.css'; // Import the external CSS file

const Task4 = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle the theme
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <button
        onClick={toggleTheme}
        className={`toggle-button ${darkMode ? "dark-mode-button" : "light-mode-button"}`}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Task4;
