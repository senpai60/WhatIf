import React from 'react';
import styled from 'styled-components';
// Importing icons using their SVG path data to avoid external library dependencies

// Home Icon: House filled
const HomeIconPath = "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z";
// Explore Icon: Search
const ExploreIconPath = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z";
// Add/Post Icon: Plus in a circle/Square (using a plus sign for simplicity)
const AddIconPath = "M12 4v16m-8-8h16";
// Notification Icon: Bell (adjusting the original shopping cart to be a bell/notification icon for relevance)
const NotificationIconPath = "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9zm-4.27 10a2 2 0 0 1-3.46 0";
// Profile Icon: User
const ProfileIconPath = "M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z";

const NavItem = ({ path, label, onClick, isCenter, iconStroke }) => {
    // Determine the viewBox based on whether the icon has a fill or just a stroke
    const viewBox = iconStroke ? "0 0 24 24" : "0 0 1024 1024";
    
    return (
        <button className={`nav-button ${isCenter ? 'center-button' : ''}`} onClick={onClick} aria-label={label}>
            <svg 
                className="icon" 
                viewBox={viewBox} 
                stroke={iconStroke ? "currentColor" : "none"} 
                fill={iconStroke ? "none" : "currentColor"} 
                strokeWidth={iconStroke ? 2 : 0}
            >
                <path d={path} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
};

const MobileNavBar = ({ dark }) => {
    const handleNavClick = (label) => {
        // In a real app, this would use a router (e.g., react-router-dom) or state switch
        console.log(`Navigating to: ${label}`);
    };

    const navLinks = [
        { path: HomeIconPath, label: "Home", isCenter: false, iconStroke: false },
        { path: ExploreIconPath, label: "Explore", isCenter: false, iconStroke: true },
        { path: AddIconPath, label: "Add Post", isCenter: true, iconStroke: true },
        { path: NotificationIconPath, label: "Notifications", isCenter: false, iconStroke: true },
        { path: ProfileIconPath, label: "Profile", isCenter: false, iconStroke: false },
    ];

    return (
        <StyledWrapper $dark={dark}>
            <div className="nav-container">
                {navLinks.map((link, index) => (
                    <NavItem
                        key={index}
                        path={link.path}
                        label={link.label}
                        onClick={() => handleNavClick(link.label)}
                        isCenter={link.isCenter}
                        iconStroke={link.iconStroke}
                    />
                ))}
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    /* Theme Variables */
    --nav-bg: ${({ $dark }) => ($dark ? 'var(--dark-mat)' : 'var(--light-mat)')};
    --nav-color: ${({ $dark }) => ($dark ? 'var(--dark-text)' : 'var(--light-text)')};
    --nav-shadow: ${({ $dark }) => ($dark ? '0 -4px 10px rgba(0, 0, 0, 0.4)' : '0 -4px 10px rgba(0, 0, 0, 0.1)')};
    --center-bg: #ff5050; /* Highlight color for the center button */
    
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    
    .nav-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        max-width: 500px; /* Max width for central alignment on desktop */
        margin: 0 auto;
        padding: 0.5rem 0.25rem;
        background-color: var(--nav-bg);
        box-shadow: var(--nav-shadow);
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    .nav-button {
        outline: 0 !important;
        border: 0 !important;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--nav-color);
        transition: all ease-in-out 0.3s;
        cursor: pointer;
    }
    
    .nav-button:hover:not(.center-button) {
        /* Subtle lift and color change on hover */
        background-color: rgba(255, 255, 255, 0.1); 
        transform: translateY(-2px);
    }
    
    .icon {
        font-size: 24px;
        width: 1.5rem;
        height: 1.5rem;
    }

    /* Styling for the central "Add" button */
    .center-button {
        background-color: var(--center-bg);
        color: white; /* Always white for contrast */
        transform: scale(1.1);
        margin-top: -1.5rem; /* Lift it visually above the main bar */
        box-shadow: 0 4px 15px rgba(255, 80, 80, 0.5);
        border: 4px solid var(--nav-bg); /* Border matches background for floating effect */
    }
    
    .center-button:hover {
        background-color: #ff3333;
        transform: scale(1.2);
    }
    
    .center-button .icon {
        /* Make the plus sign slightly larger */
        width: 1.75rem; 
        height: 1.75rem;
    }
`;

export default MobileNavBar;
