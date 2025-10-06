// components/Navbar.js
import { useGSAP } from "@gsap/react";
import React, { useRef, useCallback } from "react"; // useCallback import kiya
import { HiMenuAlt1, HiX } from "react-icons/hi";
import gsap from "gsap";

// Destructure the required props:
function Navbar({ toggleTheme, getThemeClass, currentTheme, themeIcons }) {
  // 🌟 Sidebar container ke liye ref
  const navContainerRef = useRef(null);

  // Determine which icon to display based on the *current* theme
  const IconToDisplay = themeIcons[currentTheme];

  // 🌟 Sidebar kholne ka function (Component scope mein)
  const openNavlinks = useCallback(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        x: "0%", // -100% se 0% tak move karega
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, []);

  // 🌟 Sidebar bandh karne ka function (Component scope mein)
  const closeNavlinks = useCallback(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        x: "-100%", // wapas -100% par chala jayega
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, []);

  // useGSAP ka kaam sirf GSAP library ko initialize karna hai (agar zaroori ho)
  // Animation logic ab directly functions mein hai.
  useGSAP(() => {
    // Agar future mein koi complex setup chahiye ho toh yahan kar sakte hain
  }, []);

  return (
    <>
      {/* 🌟 FULL-SCREEN SIDEBAR/NAV LINKS CONTAINER 🌟 */}
      <div
        ref={navContainerRef} // 🌟 ref attach kiya
        // w-full aur h-dvh se full screen coverage
        className={`w-full h-dvh fixed z-[999] top-0 flex flex-col items-center justify-center ${getThemeClass(
          "light-material",
          "dark-material"
        )} shadow-xl`}
        // Initial position set: screen se bahar (left)
        style={{ transform: "translateX(-100%)" }}
      >
        {/* Close Button - TOP-LEFT par position kiya gaya */}
        <button
          onClick={closeNavlinks} // 🌟 Direct function call
          className={`absolute top-4 left-4 text-3xl p-2 rounded-full transition-colors ${getThemeClass(
            "light-text",
            "dark-text"
          )}`}
        >
          <HiX />
        </button>

        {/* Navigation Links - Center mein aligned */}
        <nav className="flex flex-col w-full items-center">
          {/* Links click hone par closeNavlinks call karein */}
          {["home", "faq", "settings", "friends", "logout"].map((text, i) => (
            <a
              key={text}
              href="#"
              onClick={closeNavlinks}
              className={`text-4xl poppins font-semibold capitalize py-6 transition-colors hover:opacity-70 ${i==4?"text-red-500 mt-10":""}`}
            >
              {text}
            </a>
          ))}
          
        </nav>
      </div>

      {/* 🌟 MAIN NAVBAR 🌟 */}
      <div
        className={`fixed top-0 lef-0 z-10 w-full h-16 flex items-center justify-between px-5 ${getThemeClass(
          "light-material",
          "dark-material"
        )} shadow-md`}
      >
        {/* Menu Button - openNavlinks call karega */}
        <button
          onClick={openNavlinks} // 🌟 Direct function call
          className={`text-2xl p-2 rounded-full transition-colors ${getThemeClass(
            "light-text",
            "dark-text"
          )}`}
        >
          <HiMenuAlt1 />
        </button>

        <h1 className="text-2xl monton">WhatIfLab</h1>

        {/* 🌟 THEME TOGGLE BUTTON 🌟 */}
        <button
          onClick={toggleTheme}
          className={`${getThemeClass(
            "light-text",
            "dark-text"
          )} text-2xl p-2 rounded-full transition-colors`}
        >
          {IconToDisplay}
        </button>
      </div>
    </>
  );
}

export default Navbar;
