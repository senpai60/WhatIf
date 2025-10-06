import React from "react";
import Navbar from "./Navbar"; // or the correct path to Navbar
import UploadPostCard from "../cards/UploadPostCard"; // if not already imported
import PostCard from "../cards/PostCard"; // if not already imported

// 🌟 Added 'paddingBottomClass' to props
function Home({ toggleTheme, getThemeClass, theme, themeIcons, paddingBottomClass }) {
  return (
    // 🌟 Applying the dynamic padding class here (pb-24)
    <div className={paddingBottomClass}>
      <Navbar
        toggleTheme={toggleTheme}
        getThemeClass={getThemeClass}
        currentTheme={theme}
        themeIcons={themeIcons}
      />
      <UploadPostCard getThemeClass={getThemeClass} key="upload-post-card" />
      <PostCard getThemeClass={getThemeClass} post={{ _id: 1 }} />
      <PostCard getThemeClass={getThemeClass} post={{ _id: 2 }} />
      <PostCard getThemeClass={getThemeClass} post={{ _id: 3 }} />
      <PostCard getThemeClass={getThemeClass} post={{ _id: 4 }} />
    </div>
  );
}

export default Home;
