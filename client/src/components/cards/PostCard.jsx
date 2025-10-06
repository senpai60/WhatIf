import React from "react";
import LikeButton from "../ui/LikeButton";

function PostCard({ getThemeClass, post }) {
  // Card background ke liye 'materials' class use ki gayi hai
  const cardMaterialClass = getThemeClass("light-materials", "dark-materials");
  // Text color already App.js mein set hai, but hum yahan specific opacity set kar rahe hain.

  return (
    <div
      className={`w-full max-w-md p-6 my-4 rounded-xl shadow-2xl transition-all duration-300 ${cardMaterialClass} mx-auto mt-5`}
    >
      <div className="card-header flex items-center gap-1 mb-4">
        <div className="dp w-10 h-10 bg-amber-200 rounded-full"></div>
        <div className="username">@username</div>
      </div>
      <h2 className="text-3xl font-bold mb-3 monton [word-spacing:0.2em]">
        What if - this happens
      </h2>
      <p className="poppins text-base opacity-90 mb-4">
        Imagine if all digital data suddenly vanished. This card discusses the
        immediate chaos, the long-term societal reset, and what technologies
        might survive.
      </p>
      <div className="flex justify-between items-center text-sm opacity-60 poppins">
        <span className="font-semibold">Author: WhatIf AI</span>
        <span>Date: Oct 2025</span>
      </div>
      <div className="card-footer">
        <LikeButton
          dark={getThemeClass("light", "dark") === "dark"}
          id={post._id}
        />
      </div>
    </div>
  );
}

export default PostCard;
