import React, { forwardRef } from "react";
import "./styles/ChatArea.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <div
      ref={ref}
      key={message.timestamp}
      className={`message__div ${isUser && "message__user"}`}
    >
      <div className={isUser ? "message__userCard" : "message__guestCard"}>
        <div className="message__username">
          {!isUser && `${message.username || "unknown-user"}`}
        </div>
        {message.message}
      </div>
    </div>
  );
});
export default Message;
