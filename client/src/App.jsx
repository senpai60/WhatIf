import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HiMoon, HiOutlineSun } from "react-icons/hi";
import Home from "./components/layouts/Home";
import MobileNavBar from "./components/layouts/MobileNavBar";
import Settings from "./components/layouts/Settings";

// 🌟 Import Lenis for Awwwards-like smooth scrolling
import Lenis from "@studio-freight/lenis";

function App() {
  // Theme State
  const [theme, setTheme] = useState("dark");
  const [dark, setDark] = useState(true);

  // ⚡️ Initialize Lenis in a useEffect
  useEffect(() => {
    // 1. Create a new Lenis instance
    const lenis = new Lenis({
      duration: 3, // Time taken for the scroll to complete (velocity)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Popular easing for fluid momentum
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false, // Set to true for smoother touch scrolling on mobile
      smooth: true,
      mouseMultiplier: 1, // Controls how much the mouse wheel scrolls
    });

    // 2. Define the animation loop to drive the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // 3. Start the loop
    requestAnimationFrame(raf);

    // 4. Cleanup function to prevent memory leaks on unmount
    return () => {
      lenis.destroy();
    };
  }, []); // Run only once on component mount

  // Theme Logic
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
    // Lenis manages the viewport, so we can use a standard outer div
    <div>
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

        {/* 🌟 Mobile Navigation Bar (visible on all routes) */}
        <MobileNavBar dark={dark} />
      </div>
    </div>
  );
}

export default App;