import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HiMoon, HiOutlineSun } from "react-icons/hi";
import Home from "./components/layouts/Home";
import MobileNavBar from "./components/layouts/MobileNavBar";
import Settings from "./components/layouts/Settings";
import Profile from "./components/layouts/Profile"; 
import EditProfile from "./components/layouts/EditProfile"; // 🌟 New: EditProfile Import Kiya

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
      smoothTouch: false, 
      smooth: true,
      mouseMultiplier: 1, 
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
  }, []); 

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

  const paddingBottomClass = "pb-24 md:pb-5"; // Corrected variable name

  // Reusable prop object for cleaner routing
  const themeProps = { toggleTheme, getThemeClass, theme, themeIcons, paddingBottomClass };

  return (
    <div
      className={`${getThemeClass("light-bg", "dark-bg")} ${getThemeClass(
        "light-text",
        "dark-text"
      )} min-h-screen`}
    >
      <div> 
        <Routes>
          <Route path="/" element={<Home {...themeProps} />} />
          <Route path="/settings" element={<Settings {...themeProps} />} />
          <Route path="/profile" element={<Profile {...themeProps} />} /> 
          {/* 🌟 New Route Added */}
          <Route path="/edit-profile" element={<EditProfile {...themeProps} />} />
        </Routes>

        {/* Mobile Navigation Bar */}
        <MobileNavBar dark={dark} />
      </div>
    </div>
  );
}

export default App;