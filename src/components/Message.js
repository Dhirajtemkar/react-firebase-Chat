import React from "react";
import "./styles/ChatArea.css";

function Message({ message, username }) {
  const isUser = username === message.username;

  return (
    <div className={`message__div ${isUser && "message__user"}`}>
      <div className={isUser ? "message__userCard" : "message__guestCard"}>
        {message.username} : {message.text}
      </div>
    </div>
  );
}
export default Message;
