import React, { useState, useEffect } from "react";

const ThemeLightDark = () => {
  const [theme, setTheme] = useState("light");

  // Set the theme when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Toggle the theme and save it in localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark"); 
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg text-white bg-gray-800 dark:bg-gray-200 dark:text-black transition-all duration-300"
    >
      {theme === "light" ? ( <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414m-9.9 0l-1.414 1.414M18.364 5.636l-1.414 1.414m-9.9 0L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>) : ( <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>)}
    </button>
  );
};

export default ThemeLightDark;
