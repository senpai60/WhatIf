import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Simple pulse animation for the like button
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

/**
 * A dynamic button component for post actions (Like, Comment, Share).
 * @param {string} type - 'like', 'comment', or 'share'
 * @param {string} id - Unique ID for the post element (for checkbox linking)
 * @param {boolean} dark - Current theme state
 * @param {string} iconPath - SVG path data for the icon
 * @param {string} label - Button text label
 * @param {string} [activeColor='#ff5050'] - Color when the button is in its 'active' state (primarily for 'like')
 */
const ActionButton = ({ type, id, dark, iconPath, label, activeColor = '#ff5050' }) => {
  // We'll only use state for 'like' to handle the checked state, 
  // but for 'comment' and 'share', it will just be a visual button.
  const isToggle = type === 'like'; 
  
  // Use a local state for demo purposes, in a real app this would come from props/global state
  const [isChecked, setIsChecked] = useState(false); 

  const handleToggle = () => {
    if (isToggle) {
        setIsChecked(prev => !prev);
    } else {
        // Here you would implement logic for comment/share, e.g., showing a modal
        console.log(`${label} button clicked for post ID: ${id}`);
    }
  };

  // 🌟 FIX: Removed the animation property from inline styles.
  const IconSvg = ({ color, isAnimated }) => (
    <svg 
        viewBox="0 0 512 512" 
        xmlns="http://www.w3.org/2000/svg" 
        // 🌟 Use a class name to handle the pulse animation (defined in StyledWrapper)
        className={isAnimated ? 'animate-pulse' : ''}
        style={{ fill: color, width: '1.2em', height: '1.2em', transition: 'fill 0.2s' }}
    >
        <path d={iconPath} />
    </svg>
  );
  
  // For non-toggle buttons, we don't need the hidden checkbox pattern
  if (!isToggle) {
      const iconColor = dark ? 'var(--dark-text)' : 'var(--light-text)';
      return (
        <StyledWrapper $dark={dark} $activeColor={activeColor} onClick={handleToggle}>
             <button className="action-button poppins">
                <span className="icon-wrap">
                    <IconSvg color={iconColor} isAnimated={false} />
                </span>
                <span className="button-text">{label}</span>
            </button>
        </StyledWrapper>
      )
  }

  // Render the Like (toggle) button
  return (
    <StyledWrapper $dark={dark} $activeColor={activeColor}>
      <input 
        className="action-check" 
        type="checkbox" 
        id={id} 
        checked={isChecked}
        onChange={handleToggle}
      />
      <label className="action-label poppins" htmlFor={id}>
        {/* Inactive Icon (Theme Color) */}
        <span className="icon-wrap inactive-icon">
            <IconSvg color={dark ? 'var(--dark-text)' : 'var(--light-text)'} isAnimated={false} />
        </span>
        {/* Active Icon (Red/Active Color) */}
        <span className="icon-wrap active-icon">
            {/* 🌟 isAnimated prop added for class control */}
            <IconSvg color={activeColor} isAnimated={true} /> 
        </span>
        <span className="button-text">{label}</span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  --mat-bg: ${({ $dark }) => ($dark ? 'var(--dark-mat)' : 'var(--light-mat)')};
  --primary-text: ${({ $dark }) => ($dark ? 'var(--dark-text)' : 'var(--light-text)')};
  --active-color: ${({ $activeColor }) => $activeColor};

  .action-check {
    display: none;
  }
  
  .action-label, .action-button {
    display: flex;
    align-items: center;
    padding: 0.5rem .8rem;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: var(--mat-bg);
    color: var(--primary-text);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    border: 1px solid var(--primary-text);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    white-space: nowrap; /* Prevent button text from wrapping */
    outline: none;
  }
  
  .action-button {
    border: 1px solid var(--primary-text);
  }

  .action-label:hover, .action-button:hover {
    opacity: 0.8;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  .icon-wrap {
    display: flex;
    margin-right: 0.5rem;
    align-items: center;
    justify-content: center;
  }
  
  /* 🌟 New style for pulse animation using a class 🌟 */
  .animate-pulse {
      animation: ${pulse} 0.3s ease-out;
  }

  /* Default state for toggle (like) */
  .inactive-icon {
    display: block;
  }
  .active-icon {
    display: none;
  }
  
  /* LIKED state */
  .action-check:checked + .action-label {
    border-color: var(--active-color);
  }

  .action-check:checked + .action-label .inactive-icon {
    display: none;
  }

  .action-check:checked + .action-label .active-icon {
    display: block;
  }

  .action-check:checked + .action-label .button-text {
    color: var(--active-color);
  }
`;

export default ActionButton;
