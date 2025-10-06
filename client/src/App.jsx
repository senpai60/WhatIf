import React, { useState } from "react";
import { HiMoon, HiOutlineSun } from "react-icons/hi";
import Home from "./components/layouts/Home";
import MobileNavBar from "./components/layouts/MobileNavBar"; 

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

  // The MobileNavBar is about 5.5rem (h-14 + margins/shadow) high.
  // We use Tailwind's p-24 (6rem) to ensure padding is applied correctly.
  const contentPaddingBottom = "pb-24 md:pb-5"; // Added responsive padding

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
        // 🌟 Passing padding class to Home component
        paddingBottomClass={contentPaddingBottom}
      />

      {/* 🌟 New: Mobile Navigation Bar */}
      <MobileNavBar dark={dark} />
    </div>
  );
}

export default App;
