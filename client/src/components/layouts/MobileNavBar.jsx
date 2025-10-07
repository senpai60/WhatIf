import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// --- ICON PATH CONSTANTS ---
const HomeIconPath = "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z";
const ExploreIconPath = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z";
const AddIconPath = "M12 5v14M5 12h14"; 
const NotificationIconPath = "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9zm-4.27 10a2 2 0 0 1-3.46 0";
const ProfileIconPath = "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM20 21a8 8 0 0 0-16 0"; 

// --- REUSABLE NAV ITEM COMPONENT ---
const NavItem = ({ path, label, to, isCenter, iconStroke, isActive }) => {
    const viewBox = (label === 'Home') ? "0 0 1024 1024" : "0 0 24 24";
    
    return (
        <Link 
            to={to} 
            className={`nav-button ${isCenter ? 'center-button' : ''} ${isActive ? 'active' : ''} poppins`} 
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
        </Link>
    );
};

// --- MOBILE NAVIGATION BAR MAIN COMPONENT ---
const MobileNavBar = ({ dark = false }) => {
    const location = useLocation();

    const navData = [
        { path: HomeIconPath, label: "Home", isCenter: false, iconStroke: false, to: "/" }, 
        { path: ExploreIconPath, label: "Explore", isCenter: false, iconStroke: true, to: "/explore" }, 
        { path: AddIconPath, label: "Add", isCenter: true, iconStroke: true, to: "/add" }, 
        { path: NotificationIconPath, label: "Notifications", isCenter: false, iconStroke: true, to: "/notifications" }, 
        { path: ProfileIconPath, label: "Profile", isCenter: false, iconStroke: true, to: "/profile" }, // 🌟 Link /profile set
    ];

    const themeStyles = {
        '--dark-bg': '#040D12',
        '--dark-mat': '#092028',
        '--dark-text': '#99a4aa',
        '--light-bg': '#b4d9ce',
        '--light-mat': '#cce3da',
        '--light-text': '#092028',
        '--nav-bg': dark ? 'var(--dark-mat)' : 'var(--light-mat)',
        '--nav-color': dark ? 'var(--dark-text)' : 'var(--light-text)',
        '--nav-shadow': dark ? '0 -4px 10px rgba(0,0,0,0.4)' : '0 -4px 10px rgba(0,0,0,0.1)',
        '--accent': dark ? 'var(--dark-text)' : 'var(--light-text)',
        '--nav-hover-bg': dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
        backgroundColor: dark ? 'var(--dark-bg)' : 'var(--light-bg)',
        fontFamily: "'Inter', sans-serif",
        position: 'relative',
    };

    const globalStyles = `
        .nav-container {
            display: flex;
            justify-content: space-around;
            align-items: center; 
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 500px;
            padding: 0.5rem 0.25rem; 
            background-color: var(--nav-bg);
            box-shadow: var(--nav-shadow);
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            height: 4.5rem;
            z-index: 100;
        }
        .nav-button {
            outline: 0 !important; 
            border: 0 !important;
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
        .nav-button:hover {
            background-color: var(--nav-hover-bg); 
            transform: scale(1.1); 
        }
        .nav-button.active {
            color: var(--accent);
            box-shadow: 0 2px 5px rgba(0,0,0,0.2); 
        }
        .center-button {
            width: 4rem; 
            height: 4rem; 
            background-color: var(--nav-color);
            color: var(--nav-bg); 
            transform: scale(1.1);
            margin-top: -1.75rem; 
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4); 
            border: 5px solid var(--nav-bg); 
            border-radius: 50%;
            z-index: 101;
        }
        .icon {
            width: 1.5rem;
            height: 1.5rem; 
            transition: transform 0.2s;
        }
        .center-button .icon {
            width: 2rem; 
            height: 2rem; 
        }
    `;

    return (
        <div className="app-wrapper" style={themeStyles}>
            <style>{globalStyles}</style>
            <div className="nav-container">
                {navData.map((link, index) => (
                    <NavItem
                        key={index}
                        path={link.path}
                        label={link.label}
                        to={link.to}
                        isCenter={link.isCenter}
                        iconStroke={link.iconStroke}
                        isActive={location.pathname === link.to}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobileNavBar;