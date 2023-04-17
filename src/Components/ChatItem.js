import React from "react";
import "./ChatItem.css";

function ChatItem({ conversation, onSelect }) {
  return (
    <div className="chat-item" onClick={() => onSelect(conversation.id)}>
      <div className="chat-title">{conversation.title}</div>
    </div>
  );
}

export default ChatItem;