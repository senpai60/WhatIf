import React from "react";
import styled from "styled-components";

const LikeButton = ({ dark,id }) => {
  return (
    <StyledWrapper $dark={dark}>
      <div className="like-button">
        <input className="on" id={heartId} type="checkbox" />
        <label className="like" htmlFor={heartId}>
          ...
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #heart {
    display: none;
  }

  .like-button {
    position: relative;
    cursor: pointer;
    display: flex;
    height: 48px;
    width: 150px;
    border-radius: 16px;
    border: none;
    background-color: ${({ $dark }) => ($dark ? "#040D12" : "#b4d9ce")};
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: ${({ $dark }) =>
      $dark
        ? "inset -2px -2px 5px rgba(255,255,255,0.2), inset 2px 2px 5px rgba(0,0,0,0.1), 4px 4px 10px rgba(0,0,0,0.4)"
        : "inset -2px -2px 5px rgba(0,0,0,0.1), inset 2px 2px 5px rgba(255,255,255,0.3), 4px 4px 8px rgba(0,0,0,0.1)"};
  }

  .like {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .like-icon {
    fill: #eaa6b3; /* same for both themes */
    height: 28px;
    width: 28px;
    transition: fill 0.3s ease;
  }

  .like-text {
    color: ${({ $dark }) => ($dark ? "#cce3da" : "#092028")};
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }

  .like-count {
    position: absolute;
    right: 0;
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ $dark }) => ($dark ? "#cce3da" : "#092028")};
    font-size: 16px;
    border-left: 2px solid ${({ $dark }) => ($dark ? "#040D12" : "#b4d9ce")};
    transition: all 0.5s ease-out;
  }

  .like-count.two {
    transform: translateY(40px);
  }

  .on:checked ~ .like .like-icon {
    fill: #ff5050;
    animation: enlarge 0.25s ease-out 1;
  }

  .on:checked ~ .like-count.two {
    transform: translateX(0);
    color: ${({ $dark }) => ($dark ? "#092028" : "#99a4aa")};
  }

  .on:checked ~ .like-count.one {
    transform: translateY(-40px);
  }

  @keyframes enlarge {
    0% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1.3);
    }
  }
`;

export default LikeButton;
