import React from "react";
// 🌟 New: Only ActionButton is imported. The broken import of LikeButton is removed.
import ActionButton from "../ui/ActionButton.jsx";

// Path data for Comment Icon (Chat bubble)
const commentPath = "M448 0H64C28.7 0 0 28.7 0 64v352c0 35.3 28.7 64 64 64h48l48 48 48-48h192c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM320 336H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32zm0-96H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32z";

// Path data for Share Icon (Upload/Export)
const sharePath = "M400 320h-80v-96H272v96h-80l112 112 112-112zM512 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64zM464 64H48v384c0 17.6 14.4 32 32 32h368c17.6 0 32-14.4 32-32V64z";

// Path data for the filled heart icon (re-used for Like)
const heartPath = "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z";


function PostCard({ getThemeClass, post }) {
  // Card background ke liye 'materials' class use ki gayi hai
  const cardMaterialClass = getThemeClass("light-materials", "dark-materials");
  const dark = getThemeClass("light", "dark") === "dark";

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
      
      {/* Action Buttons: Like, Comment, Share */}
      <div className="card-footer mt-4 flex justify-between gap-3">
        
        {/* Like Button (Toggle) - Now using ActionButton directly */}
        <ActionButton
            type="like"
            id={`like-${post._id}`}
            dark={dark}
            iconPath={heartPath}
            label="Like"
        />

        {/* Comment Button (Click) */}
        <ActionButton
            type="comment"
            id={`comment-${post._id}`}
            dark={dark}
            iconPath={commentPath}
            label="Comment"
        />
        
        {/* Share Button (Click) */}
        <ActionButton
            type="share"
            id={`share-${post._id}`}
            dark={dark}
            iconPath={sharePath}
            label="Share"
        />
        
      </div>
    </div>
  );
}

export default PostCard;
