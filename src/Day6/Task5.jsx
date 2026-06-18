import { useState } from "react";

const Task5 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={ isDarkMode? "bg-black text-white w-80 p-6 rounded-3xl shadow-lg transition-all duration-300"
          : "bg-white text-black w-80 p-6 rounded-3xl shadow-lg transition-all duration-300"}>
      <h2 className="text-4xl font-bold text-center mb-4">Task-5</h2>

      <h3 className="text-2xl font-semibold mb-4">Theme Switch</h3>

      <p className="text-lg mb-4"> {isDarkMode ? "Dark Mode" : "Light Mode"}</p>

      <button onClick={handleThemeToggle}className={ isDarkMode ? "bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-3xl font-medium"
            :"bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-3xl font-medium"}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Task5;