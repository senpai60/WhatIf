import React from "react";
import styled from "styled-components";

const UploadPostCard = () => {
  return (
    <StyledWrapper>
      <div className="w-full flex justify-center items-center">
        <div className="container_chat_bot w-full px-5 mt-2 md:w-1/3">
          <div className="container-chat-options">
            <div className="chat">
              <div className="chat-bot">
                <textarea
                  id="chat_bot"
                  name="chat_bot"
                  placeholder="Imagine Something...✦˚"
                  defaultValue={""}
                />
              </div>
              <div className="options">
                <div className="btns-add">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      viewBox="0 0 24 24"
                      height={20}
                      width={20}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0-8h6m-3-3v6"
                        strokeWidth={2}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      viewBox="0 0 24 24"
                      height={20}
                      width={20}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.01 8.01 0 0 0 5.648 6.667M10.03 13c.151 2.439.848 4.73 1.97 6.752A15.9 15.9 0 0 0 13.97 13zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.01 8.01 0 0 0 19.938 13M4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.01 8.01 0 0 0 4.062 11m5.969 0h3.938A15.9 15.9 0 0 0 12 4.248A15.9 15.9 0 0 0 10.03 11m4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.01 8.01 0 0 0-5.648-6.667"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <button className="btn-submit">
                  <i>
                    <svg viewBox="0 0 512 512">
                      <path
                        fill="currentColor"
                        d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"
                      />
                    </svg>
                  </i>
                </button>
              </div>
            </div>
          </div>
          <div className="tags flex flex-wrap gap-1 mt-2">
            {["Create An Image", "Analyse Data", "More"].map((text, i) => (
              <span key={text} className="rounded-2xl px-3 py-1">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container_chat_bot {
    display: flex;
    flex-direction: column;
  }

  .container_chat_bot .container-chat-options {
    position: relative;
    display: flex;
    background: var(--dark-mat);
    border-radius: 16px;
    padding: 1.5px;
    overflow: hidden;

    &::after {
      position: absolute;
      content: "";
      top: -10px;
      left: -10px;
      background: radial-gradient(
        ellipse at center,
        var(--dark-text),
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0)
      );
      width: 30px;
      height: 30px;
      filter: blur(1px);
    }
  }

  .container_chat_bot .container-chat-options .chat {
    display: flex;
    flex-direction: column;
    background-color: var(--dark-bg);
    border-radius: 15px;
    width: 100%;
    overflow: hidden;
  }

  .container_chat_bot .chat .chat-bot textarea {
    background-color: transparent;
    border-radius: 16px;
    border: none;
    width: 100%;
    height: 50px;
    color: var(--dark-text);
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 400;
    padding: 10px;
    resize: none;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
      transition: all 0.3s ease;
    }
  }

  .container_chat_bot .chat .options .btns-add button {
    color: var(--dark-text);
    transition: all 0.3s ease;

    &:hover {
      color: var(--dark-text);
      transform: translateY(-2px);
    }
  }

  .container_chat_bot .chat .options .btn-submit i svg {
    color: var(--dark-text);
    transition: all 0.3s ease;
  }

  .container_chat_bot .tags span {
    background-color: var(--dark-bg);
    border: 1.5px solid var(--dark-mat);
    color: var(--dark-text);
  }
`;

export default UploadPostCard;
