import React from "react";
import "./MessageItem.css";

function MessageItem({ message }) {
  return (
    <div className="message-item">
      <div className="message-text">{message.text}</div>
    </div>
  );
}

export default MessageItem;