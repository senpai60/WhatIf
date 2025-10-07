import React, { useState } from 'react';
import Navbar from './Navbar'; 
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

// Simple SVG path for user icon
const UserPath = "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z";

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

// Reusable Input Field Component
const FormInput = ({ label, type = 'text', value, onChange, getThemeClass, isTextArea = false }) => {
    const inputClass = getThemeClass('bg-gray-100 border-gray-300 text-gray-800', 'bg-gray-700 border-gray-600 text-gray-200');
    
    return (
        <div className="mb-6">
            <label className={`block poppins font-medium mb-2 ${getThemeClass('text-gray-700', 'text-gray-300')}`}>
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    className={`w-full p-3 border rounded-lg shadow-inner focus:outline-none focus:ring-2 ${inputClass} focus:ring-blue-500 transition-colors resize-none`}
                    rows="3"
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    type={type}
                    className={`w-full p-3 border rounded-lg shadow-inner focus:outline-none focus:ring-2 ${inputClass} focus:ring-blue-500 transition-colors`}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
};

// 🌟 Edit Profile Main Component
function EditProfile({ toggleTheme, getThemeClass, theme, themeIcons, paddingBottomClass }) {
    // Dummy state for form fields
    const [name, setName] = useState('Senpai');
    const [bio, setBio] = useState('AI enthusiast | Building the WhatIfLab | React & Tailwind Lover 💻');
    const [location, setLocation] = useState('Digital World');
    
    const cardClass = getThemeClass('light-materials', 'dark-materials');
    const textClass = getThemeClass('light-text', 'dark-text');
    
    const handleSave = (e) => {
        e.preventDefault();
        console.log('Profile Saved:', { name, bio, location });
        // Logic to submit data to backend goes here
        alert('Profile saved successfully! (Simulated)');
    };

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
                
                {/* Header with Back Button */}
                <div className="flex items-center space-x-4 mb-8 pt-4">
                    <Link to="/profile" className="text-2xl p-2 rounded-full hover:opacity-80 transition-opacity" aria-label="Go Back">
                        <HiArrowLeft />
                    </Link>
                    <h1 className="monton text-4xl font-bold">Edit Profile</h1>
                </div>

                <form onSubmit={handleSave} className={`p-6 rounded-xl shadow-xl ${cardClass} border border-opacity-20 border-current`}>
                    
                    {/* Profile Picture Section */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-24 h-24 bg-amber-400 rounded-full border-4 border-current shadow-lg flex items-center justify-center">
                            {/* Dummy Profile Icon */}
                            <IconSvg path={UserPath} getThemeClass={getThemeClass} className="text-4xl" />
                        </div>
                        <button type="button" className="poppins text-sm mt-3 font-semibold text-blue-500 hover:text-blue-400 transition-colors">
                            Change Profile Photo
                        </button>
                    </div>

                    {/* Name Input */}
                    <FormInput 
                        label="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        getThemeClass={getThemeClass}
                    />

                    {/* Bio Text Area */}
                    <FormInput 
                        label="Bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        getThemeClass={getThemeClass}
                        isTextArea={true}
                    />
                    
                    {/* Location Input */}
                    <FormInput 
                        label="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        getThemeClass={getThemeClass}
                    />

                    {/* Save Button */}
                    <button
                        type="submit"
                        className="w-full mt-6 poppins font-bold text-lg p-3 rounded-xl bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;