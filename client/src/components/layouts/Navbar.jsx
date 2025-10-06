// components/Navbar.js
import React, { useRef, useCallback } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link } from "react-router-dom"; // ✅ Import Link for routing
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar({ toggleTheme, getThemeClass, currentTheme, themeIcons }) {
  const navContainerRef = useRef(null);
  const IconToDisplay = themeIcons[currentTheme];

  const openNavlinks = useCallback(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, []);

  const closeNavlinks = useCallback(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, []);

  useGSAP(() => {
    // Placeholder for GSAP initialization if needed
  }, []);

  return (
    <>
      {/* 🌟 FULL-SCREEN SIDEBAR/NAV LINKS CONTAINER 🌟 */}
      <div
        ref={navContainerRef}
        className={`w-full h-dvh fixed z-[999] top-0 flex flex-col items-center justify-center ${getThemeClass(
          "light-material",
          "dark-material"
        )} shadow-xl`}
        style={{ transform: "translateX(-100%)" }}
      >
        {/* Close Button */}
        <button
          onClick={closeNavlinks}
          className={`absolute top-4 left-4 text-3xl p-2 rounded-full transition-colors ${getThemeClass(
            "light-text",
            "dark-text"
          )}`}
        >
          <HiX />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col w-full items-center">
          {[
            { text: "home", path: "/" },
            { text: "faq", path: "/faq" },
            { text: "settings", path: "/settings" },
            { text: "friends", path: "/friends" },
            { text: "logout", path: "/logout" },
          ].map((link, i) => (
            <Link
              key={link.text}
              to={link.path}
              onClick={closeNavlinks}
              className={`text-4xl poppins font-semibold capitalize py-6 transition-colors hover:opacity-70 ${
                i === 4 ? "text-red-500 mt-10" : ""
              }`}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>

      {/* 🌟 MAIN NAVBAR 🌟 */}
      <div
        className={`fixed top-0 left-0 z-10 w-full h-16 flex items-center justify-between px-5 ${getThemeClass(
          "light-material",
          "dark-material"
        )} shadow-md`}
      >
        {/* Menu Button */}
        <button
          onClick={openNavlinks}
          className={`text-2xl p-2 rounded-full transition-colors ${getThemeClass(
            "light-text",
            "dark-text"
          )}`}
        >
          <HiMenuAlt1 />
        </button>

        <h1 className="text-2xl monton">WhatIfLab</h1>

        {/* Theme Toggle */}
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
