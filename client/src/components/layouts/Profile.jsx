import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 
import PostCard from '../cards/PostCard'; 

// Lucide Icon Path for Settings Gear (Reused from Settings.jsx)
const SettingsPath = "M12.22 2h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 1-1.77 1.22l-.4-.08a2 2 0 0 0-1.92.5l-.36.36a2 2 0 0 0-.5 1.92l.08.4a2 2 0 0 1-1.22 1.77H2a2 2 0 0 0-2 2v.44a2 2 0 0 0 2 2h.44a2 2 0 0 1 1.22 1.77l-.08.4a2 2 0 0 0 .5 1.92l.36.36a2 2 0 0 0 1.92.5l.4-.08a2 2 0 0 1 1.77 1.22v.44a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 1 1.77-1.22l.4.08a2 2 0 0 0 1.92-.5l-.36-.36a2 2 0 0 0 .5-1.92l-.08-.4a2 2 0 0 1 1.22-1.77h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 0-2-2h-.44a2 2 0 0 1-1.22-1.77l.08-.4a2 2 0 0 0-.5-1.92l-.36-.36a2 2 0 0 0-1.92-.5l-.4.08a2 2 0 0 1-1.77-1.22V2a2 2 0 0 0-2-2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z";

const IconSvg = ({ path, className = "text-xl", getThemeClass }) => {
    const textClass = getThemeClass('light-text', 'dark-text');
    return (
        <svg
            className={`${className} ${textClass} flex-shrink-0`} 
            viewBox="0 0 24 24" 
            height="1em" 
            width="1em" 
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor" 
            fill="none" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path d={path} />
        </svg>
    );
}

// 🌟 All necessary theme props received
function Profile({ toggleTheme, getThemeClass, theme, themeIcons, paddingBottomClass }) {
    
    // Theme classes used for styling
    const cardClass = getThemeClass('light-materials', 'dark-materials');
    const textClass = getThemeClass('light-text', 'dark-text');
    
    // Dummy user data
    const user = {
        username: "@senpai60",
        bio: "AI enthusiast | Building the WhatIfLab | React & Tailwind Lover 💻",
        posts: 125,
        likes: '15.5k',
        followers: '2.4k'
    };
    
    // Dummy post array to render
    const userPosts = [
        { _id: 'p1', content: "User post 1" },
        { _id: 'p2', content: "User post 2" },
        { _id: 'p3', content: "User post 3" },
    ];

    return (
        <div className={paddingBottomClass}>
            {/* Navbar ko props pass kiye */}
            <Navbar 
                toggleTheme={toggleTheme}
                getThemeClass={getThemeClass}
                currentTheme={theme}
                themeIcons={themeIcons}
            />
            
            <div className={`pt-16 max-w-xl mx-auto px-4 pb-4 ${textClass}`}>
                
                {/* --- PROFILE HEADER CARD --- */}
                <div className={`p-6 rounded-xl shadow-xl mb-6 ${cardClass} border border-opacity-20 border-current`}>
                    
                    <div className="flex justify-between items-start mb-4">
                        {/* Avatar */}
                        <div className="w-20 h-20 bg-amber-400 rounded-full border-4 border-current shadow-lg flex-shrink-0"></div>
                        
                        {/* Settings Button */}
                        {/* 🌟 Link changed to EditProfile route */}
                        <Link to="/edit-profile" aria-label="Edit Profile" className={`p-2 rounded-full transition-colors opacity-80 hover:opacity-100 ${getThemeClass('bg-gray-200', 'bg-gray-700')}`}>
                            <IconSvg path={SettingsPath} getThemeClass={getThemeClass} className="text-xl" />
                        </Link>
                    </div>

                    {/* Username and Bio */}
                    <h1 className="text-3xl font-bold monton [word-spacing:0.1em]">{user.username}</h1>
                    <p className="poppins text-sm opacity-80 mt-1 mb-4">{user.bio}</p>

                    {/* Stats */}
                    <div className="flex justify-between items-center py-2 border-t border-opacity-20 border-current">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold monton">{user.posts}</span>
                            <span className="poppins text-xs opacity-60">Posts</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold monton">{user.likes}</span>
                            <span className="poppins text-xs opacity-60">Likes</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold monton">{user.followers}</span>
                            <span className="poppins text-xs opacity-60">Followers</span>
                        </div>
                    </div>
                </div>

                {/* --- POSTS SECTION --- */}
                <h2 className="monton text-3xl font-bold mb-4 border-b border-opacity-20 border-current pb-2">My WhatIfs</h2>
                
                <div className="post-list">
                    {userPosts.map((post) => (
                        <PostCard 
                            key={post._id} 
                            // PostCard requires getThemeClass
                            getThemeClass={getThemeClass} 
                            post={post} 
                        />
                    ))}
                    {/* Placeholder when no posts */}
                    {userPosts.length === 0 && (
                         <p className="poppins text-center opacity-70 mt-10">No posts yet! Create your first WhatIf. 💡</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;