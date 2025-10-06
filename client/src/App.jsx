// App.js
import React, { useState } from "react";
import Navbar from "./components/layouts/Navbar";
import { HiMoon, HiOutlineSun } from "react-icons/hi"; // Combined import
import PostCard from "./components/cards/PostCard";
import UploadPostCard from "./components/cards/UploadPostCard";
import Home from "./components/layouts/Home";

function App() {
  // 🌟 Theme ko 'dark' par initialize kiya
  const [theme, setTheme] = useState("dark");
  // 🌟 dark state ko 'true' par initialize kiya
  const [dark, setDark] = useState(true);

  // Object containing the icons to display based on the *current* theme
  const themeIcons = { dark: <HiOutlineSun />, light: <HiMoon /> };

  const toggleTheme = () => {
    setDark((prevDark) => {
      const newDark = !prevDark;
      setTheme(newDark ? "dark" : "light");
      return newDark;
    });
  };

  // Utility to dynamically generate classes based on the current theme
  const getThemeClass = (lightClass, darkClass) => {
    return dark ? darkClass : lightClass;
  };

  return (
    // Apply the theme class to the main container
    <div
      className={`${getThemeClass("light-bg", "dark-bg")} ${getThemeClass(
        "light-text",
        "dark-text"
      )} min-h-screen`}
    >
      <Home
        toggleTheme={toggleTheme}
        getThemeClass={getThemeClass}
        theme={theme}
        themeIcons={themeIcons}
      />
    </div>
  );
}

export default App;
