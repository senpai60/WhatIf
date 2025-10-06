import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HiMoon, HiOutlineSun } from "react-icons/hi";
import Home from "./components/layouts/Home";
import MobileNavBar from "./components/layouts/MobileNavBar";
import Settings from "./components/layouts/Settings";

function App() {
  // 🌟 Theme ko 'dark' par initialize kiya
  const [theme, setTheme] = useState("dark");
  const [dark, setDark] = useState(true);

  const themeIcons = { dark: <HiOutlineSun />, light: <HiMoon /> };

  const toggleTheme = () => {
    setDark((prevDark) => {
      const newDark = !prevDark;
      setTheme(newDark ? "dark" : "light");
      return newDark;
    });
  };

  const getThemeClass = (lightClass, darkClass) => {
    return dark ? darkClass : lightClass;
  };

  const contentPaddingBottom = "pb-24 md:pb-5";

  return (
    <div
      className={`${getThemeClass("light-bg", "dark-bg")} ${getThemeClass(
        "light-text",
        "dark-text"
      )} min-h-screen`}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Home
              toggleTheme={toggleTheme}
              getThemeClass={getThemeClass}
              theme={theme}
              themeIcons={themeIcons}
              paddingBottomClass={contentPaddingBottom}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <Settings
              toggleTheme={toggleTheme}
              getThemeClass={getThemeClass}
              theme={theme}
              themeIcons={themeIcons}
              paddingBottomClass={contentPaddingBottom}
            />
          }
        />
      </Routes>

      {/* 🌟 Mobile Navigation Bar */}
      <MobileNavBar dark={dark} />
    </div>
  );
}

export default App;
