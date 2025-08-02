import React from "react";

const ChatBubble = ({ message, isUser }) => (
  <div className={`chat-bubble ${isUser ? "user" : "bot"}`}>
    <p>{message}</p>
  </div>
);

export default ChatBubble;
