import React, { useState } from 'react';
// Lucide icons ka path data yahan define kiya jayega
// Note: Hum react-icons/hi ko inline SVG paths se replace kar rahe hain
// Icon names corresponding to HiOutline...:
// HiMoon -> Moon, HiOutlineSun -> Sun
// HiOutlineBell -> Bell, HiOutlineLockClosed -> Lock, HiOutlineUserCircle -> User, HiChevronRight -> ChevronRight

// --- LUCIDE ICON SVG PATHS (Using 24x24 viewBox) ---
const MoonPath = "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z";
const SunPath = "M12 2v2M4.2 4.2l1.4 1.4M20.4 4.2l-1.4 1.4M22 12h-2M4 12H2M20.4 20.4l-1.4-1.4M4.2 20.4l1.4-1.4M12 22v-2";
const BellPath = "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a2 2 0 0 1-3.46 0";
const LockPath = "M15 11v4M8 11h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z";
const UserPath = "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z";
const ChevronRightPath = "m9 18 6-6-6-6";
// NEW ICONS
const HardDrivePath = "M22 12H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11zM6 16h12M12 16V4";
const HelpCirclePath = "M9.09 10a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01";
const ClipboardPath = "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M15 2.5a1.5 1.5 0 0 0-3 0V4h3V2.5z";


// Helper component for all settings icons
const IconSvg = ({ path }) => {
    return (
        <svg
            className="text-xl flex-shrink-0" 
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

// --- THEME TOGGLE SWITCH COMPONENT ---
const ThemeToggle = ({ dark, toggleTheme, getThemeClass }) => {
    // Determine the track color based on the theme state
    const knobClass = dark ? 'translate-x-full' : 'translate-x-0';
    const textClass = getThemeClass('light-text', 'dark-text');
    
    // Focus ring uses theme materials for contrast
    const focusRingClass = dark ? 'focus:ring-white focus:ring-offset-dark-mat' : 'focus:ring-light-text focus:ring-offset-light-mat';

    return (
        <div className="flex items-center justify-between py-4 border-b border-opacity-20 border-current">
            <div className={`flex items-center space-x-3 ${textClass}`}>
                <span className="text-xl">
                    {/* Using inline SVG components */}
                    {dark ? <IconSvg path={MoonPath} /> : <IconSvg path={SunPath} />}
                </span>
                <span className="poppins font-medium">Dark Mode</span>
            </div>
            <button
                onClick={toggleTheme}
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ${focusRingClass} ${dark ? 'bg-gray-700' : 'bg-gray-400'} ${dark && 'focus:bg-gray-600'}`}
                role="switch"
                aria-checked={dark}
            >
                {/* Knob styling adjusted to match theme colors better */}
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200 ${knobClass} ${dark ? 'bg-gray-300' : 'bg-white'}`} />
            </button>
        </div>
    );
};

// --- GENERIC SETTING ITEM COMPONENT ---
const SettingItem = ({ iconPath, label, description, getThemeClass, isLast, actionComponent, onClick }) => {
    const textClass = getThemeClass('light-text', 'dark-text');
    
    const handleActionClick = () => {
        if (onClick) {
            onClick(label);
        }
    }
    
    // Set border class, making sure border uses theme text color at low opacity
    const borderClass = isLast ? '' : 'border-b border-opacity-20 border-current';

    return (
        <div 
            className={`flex flex-col py-4 ${borderClass} ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
            onClick={onClick ? handleActionClick : undefined}
        >
            <div className={`flex justify-between items-center ${textClass}`}>
                <div className="flex items-center space-x-3">
                    {/* Using IconSvg helper component */}
                    <IconSvg path={iconPath} />
                    <span className="poppins font-medium">{label}</span>
                </div>
                {/* Render Action Component (Switch) or clickable Chevron */}
                {actionComponent ? actionComponent : (
                    onClick && <IconSvg path={ChevronRightPath} className="opacity-70" />
                )}
            </div>
            {description && (
                <p className="poppins text-xs opacity-60 mt-1 pl-8">{description}</p>
            )}
        </div>
    );
};


// --- MAIN SETTINGS COMPONENT ---
const Settings = ({ getThemeClass, toggleTheme, dark, themeIcons }) => {
    // Utility class application
    const wrapperClass = getThemeClass('light-bg', 'dark-bg');
    const cardClass = getThemeClass('light-materials', 'dark-materials');
    const textClass = getThemeClass('light-text', 'dark-text');
    
    // Notifications Toggle State and Handler
    const [isNotificationsOn, setIsNotificationsOn] = useState(true);
    const toggleNotifications = () => setIsNotificationsOn(prev => !prev);
    
    // Notifications Switch using theme colors
    const NotificationSwitch = (
        <button
            onClick={toggleNotifications}
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${isNotificationsOn ? 'bg-green-500' : 'bg-gray-400'} ${dark ? 'focus:ring-dark-text focus:ring-offset-dark-mat' : 'focus:ring-light-text focus:ring-offset-light-mat'}`}
            role="switch"
            aria-checked={isNotificationsOn}
        >
            <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${isNotificationsOn ? 'translate-x-full' : 'translate-x-0'}`} />
        </button>
    );

    const handleNavigation = (label) => {
        console.log(`Navigating to ${label} detail screen.`);
        // In a real app, this would use a router (e.g., react-router-dom)
    };

    return (
        <div className={`w-full min-h-screen pt-16 pb-20 ${wrapperClass} ${textClass}`}>
            <div className="max-w-md mx-auto px-4">
                <h1 className="monton text-4xl font-bold mb-8 text-center pt-4">
                    Settings
                </h1>

                {/* --- APPEARANCE & PROFILE SECTION --- */}
                <div className={`p-6 rounded-xl shadow-lg mb-8 ${cardClass} border border-opacity-20 border-current`}>
                    <h2 className="poppins text-xl font-semibold mb-3 border-b border-opacity-20 border-current pb-2">Personalization</h2>
                    
                    {/* Theme Toggle */}
                    <ThemeToggle dark={dark} toggleTheme={toggleTheme} getThemeClass={getThemeClass} />
                    
                    {/* Profile Item (Clickable) */}
                    <SettingItem 
                        iconPath={UserPath}
                        label="Edit Profile" 
                        description="Update your name, bio, and profile picture."
                        getThemeClass={getThemeClass}
                        onClick={handleNavigation}
                    />
                    
                    {/* Content Filtering (New Item) */}
                    <SettingItem 
                        iconPath={ClipboardPath}
                        label="Content Preferences" 
                        description="Manage topics and filter explicit content."
                        getThemeClass={getThemeClass}
                        isLast={true}
                        onClick={handleNavigation}
                    />
                </div>

                {/* --- APP CONTROL SECTION --- */}
                <div className={`p-6 rounded-xl shadow-lg mb-8 ${cardClass} border border-opacity-20 border-current`}>
                    <h2 className="poppins text-xl font-semibold mb-3 border-b border-opacity-20 border-current pb-2">App Control</h2>
                    
                    {/* Notifications Toggle */}
                    <SettingItem 
                        iconPath={BellPath}
                        label="Notifications" 
                        description="Control push and email alerts."
                        getThemeClass={getThemeClass}
                        actionComponent={NotificationSwitch}
                    />

                    {/* Privacy Item (Clickable) */}
                    <SettingItem 
                        iconPath={LockPath}
                        label="Privacy Settings" 
                        description="Review and manage data sharing and visibility."
                        getThemeClass={getThemeClass}
                        isLast={true}
                        onClick={handleNavigation}
                    />
                </div>

                {/* --- DATA & STORAGE SECTION (NEW) --- */}
                <div className={`p-6 rounded-xl shadow-lg mb-8 ${cardClass} border border-opacity-20 border-current`}>
                    <h2 className="poppins text-xl font-semibold mb-3 border-b border-opacity-20 border-current pb-2">Data & Storage</h2>
                    
                    {/* Clear Cache */}
                    <SettingItem 
                        iconPath={HardDrivePath}
                        label="Clear Cache" 
                        description="Free up space by removing temporary files (125 MB)."
                        getThemeClass={getThemeClass}
                        onClick={() => console.log("Clearing cache...")}
                    />

                    {/* Data Usage */}
                    <SettingItem 
                        iconPath={ClipboardPath}
                        label="Data Usage" 
                        description="Track how much data the app consumes."
                        getThemeClass={getThemeClass}
                        isLast={true}
                        onClick={handleNavigation}
                    />
                </div>
                
                {/* --- SUPPORT SECTION (NEW) --- */}
                <div className={`p-6 rounded-xl shadow-lg ${cardClass} border border-opacity-20 border-current`}>
                    <h2 className="poppins text-xl font-semibold mb-3 border-b border-opacity-20 border-current pb-2">Support</h2>
                    
                    {/* Help & FAQ */}
                    <SettingItem 
                        iconPath={HelpCirclePath}
                        label="Help & FAQ" 
                        description="Find answers to common questions."
                        getThemeClass={getThemeClass}
                        onClick={handleNavigation}
                    />

                    {/* Terms & Policies */}
                    <SettingItem 
                        iconPath={ClipboardPath}
                        label="Terms & Policies" 
                        description="Read our privacy policy and terms of service."
                        getThemeClass={getThemeClass}
                        isLast={true}
                        onClick={handleNavigation}
                    />
                </div>
                
                {/* --- LOGOUT BUTTON (Contrast Example) --- */}
                <button
                    className="w-full mt-8 poppins font-bold text-lg p-3 rounded-xl bg-red-600 text-white shadow-lg hover:bg-red-700 transition-colors"
                    onClick={() => console.log("Logging out...")}
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Settings;
