import React, { useState } from 'react';

// --- ICON PATH CONSTANTS (Original Paths) ---
// Home Icon: House filled (1024x1024)
const HomeIconPath = "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z";
// Explore Icon: Search (Outline, 24x24)
const ExploreIconPath = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z";
// Add/Post Icon: Plus sign (Outline, 24x24)
const AddIconPath = "M12 5v14M5 12h14"; 
// Notification Icon: Bell (Outline, 24x24)
const NotificationIconPath = "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9zm-4.27 10a2 2 0 0 1-3.46 0";
// Profile Icon: User (Outline, 24x24) - Using the simple outline path
const ProfileIconPath = "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM20 21a8 8 0 0 0-16 0"; 


// --- REUSABLE NAV ITEM COMPONENT ---
const NavItem = ({ path, label, onClick, isCenter, iconStroke, isActive }) => {
    const viewBox = (label === 'Home') ? "0 0 1024 1024" : "0 0 24 24";
    
    return (
        <button 
            className={`nav-button ${isCenter ? 'center-button' : ''} ${isActive ? 'active' : ''} poppins`} 
            onClick={onClick} 
            aria-label={label}
        >
            <svg 
                className="icon" 
                viewBox={viewBox} 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
                stroke={iconStroke ? "currentColor" : "none"} 
                fill={iconStroke ? "none" : "currentColor"} 
                strokeWidth={iconStroke ? 2 : 0}
            >
                <path d={path} strokeLinecap={iconStroke ? "round" : "initial"} strokeLinejoin={iconStroke ? "round" : "initial"} />
            </svg>
        </button>
    );
};

// --- MOBILE NAVIGATION BAR MAIN COMPONENT ---
const MobileNavBar = ({ dark = false }) => {
    // State to manage the active link for visual feedback
    const [activeLink, setActiveLink] = useState('Home');

    const handleNavClick = (label) => {
        setActiveLink(label);
        console.log(`Navigating to: ${label}`);
    };

    const navData = [
        { path: HomeIconPath, label: "Home", isCenter: false, iconStroke: false }, 
        { path: ExploreIconPath, label: "Explore", isCenter: false, iconStroke: true }, 
        { path: AddIconPath, label: "Add", isCenter: true, iconStroke: true }, 
        { path: NotificationIconPath, label: "Notifications", isCenter: false, iconStroke: true }, 
        { path: ProfileIconPath, label: "Profile", isCenter: false, iconStroke: true }, 
    ];

    // Define dynamic CSS variables based on the 'dark' prop for inline style
    const themeStyles = {
        '--light-bg': '#f5f5f5',
        '--dark-bg': '#121212',
        '--light-mat': '#ffffff',
        '--dark-mat': '#1f1f1f',
        '--light-text': '#333333',
        '--dark-text': '#ffffff',
        '--accent': '#ff5050',
        
        // Theme application based on 'dark' prop
        '--nav-bg': dark ? '#1f1f1f' : '#ffffff',
        '--nav-color': dark ? '#ffffff' : '#333333',
        '--nav-shadow': dark 
            ? '0 -4px 10px rgba(0, 0, 0, 0.4)' 
            : '0 -4px 10px rgba(0, 0, 0, 0.1)',
        '--center-bg': 'var(--accent)',

        // NEW: Dynamic hover background based on theme for better visibility
        '--nav-hover-bg': dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
        
        // Main wrapper styles
        backgroundColor: dark ? '#121212' : '#f5f5f5',
        minHeight: '100vh',
        fontFamily: "'Inter', sans-serif",
        position: 'relative',
    };

    // Consolidated CSS (Moved from styled-components to plain CSS)
    const globalStyles = `
    /* All styles migrated from StyledWrapper */

    .nav-container {
        display: flex;
        justify-content: space-around;
        align-items: center; 
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        max-width: 500px; 
        margin: 0 auto;
        padding: 0.5rem 0.25rem; 
        background-color: var(--nav-bg);
        box-shadow: var(--nav-shadow);
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        height: 4.5rem;
        z-index: 100;
        /* Center container on wide screens */
        left: 50%;
        transform: translateX(-50%);
    }

    .nav-button {
        outline: 0 !important; 
        border: 0 !important;
        
        /* FIX: Equal width and height for perfect circle */
        width: 3.5rem; 
        height: 3.5rem; 
        flex-shrink: 0; 
        
        border-radius: 50%;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--nav-color);
        transition: all ease-in-out 0.3s;
        cursor: pointer;
        position: relative;
        padding: 0;
    }
    
    /* Hover uses the new dynamic variable */
    .nav-button:hover {
        background-color: var(--nav-hover-bg); 
        transform: scale(1.1); 
    }

    .nav-button:active {
        transform: scale(0.95);
    }

    .nav-button:focus:not(:focus-visible) {
        outline: none; 
    }
    .nav-button:focus-visible {
        outline: none;
        /* Circular outline for focus */
        box-shadow: 0 0 0 3px var(--nav-color), inset 0 0 0 3px var(--nav-bg); 
    }
    
    .nav-button.active {
        color: var(--center-bg);
        /* Active button has a slight shadow */
        box-shadow: 0 2px 5px rgba(0,0,0,0.2); 
    }
    
    .icon {
        width: 1.5rem;
        height: 1.5rem; 
        transition: transform 0.2s;
    }

    /* Styling for the central "Add" button */
    .center-button {
        width: 4rem; 
        height: 4rem; 
        
        background-color: var(--center-bg);
        color: white; 
        transform: scale(1.1);
        margin-top: -1.75rem; 
        box-shadow: 0 4px 15px rgba(255, 80, 80, 0.5);
        border: 5px solid var(--nav-bg); 
        border-radius: 50%;
        z-index: 101;
    }

    .center-button:focus-visible {
         outline: none;
         /* Stronger red glow for the active button */
         box-shadow: 0 0 0 4px white, 0 0 0 7px var(--center-bg), 0 4px 15px rgba(255, 80, 80, 0.8); 
    }

    .center-button .icon {
        width: 2rem; 
        height: 2rem; 
    }
    .center-button:hover {
        transform: scale(1.15); 
        background-color: #ff3333;
    }
    `;

    return (
        <div className="app-wrapper" style={themeStyles}>
            {/* Injecting CSS styles into the DOM */}
            <style>{globalStyles}</style>
            
            <div className="nav-container">
                {navData.map((link, index) => (
                    <NavItem
                        key={index}
                        path={link.path}
                        label={link.label}
                        onClick={() => handleNavClick(link.label)}
                        isCenter={link.isCenter}
                        iconStroke={link.iconStroke}
                        isActive={activeLink === link.label}
                    />
                ))}
            </div>
            {/* Dummy content for context */}
            <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', color: dark ? 'var(--dark-text)' : 'var(--light-text)' }}>
                <h1 style={{ marginBottom: '1rem' }}>Mobile Nav Bar Demo</h1>
                <p>Current Page: <strong>{activeLink}</strong></p>
                <p style={{ marginTop: '2rem' }}>Scroll down to see the fixed navigation bar at the bottom.</p>
            </div>
        </div>
    );
};

export default MobileNavBar;
