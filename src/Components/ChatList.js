import React, { useState, useEffect } from "react";
import ChatItem from "./ChatItem";
import "./ChatList.css";

function ChatList({ onConversationSelect }) {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/conversations")
      .then((response) => response.json())
      .then((data) => setConversations(data));
  }, []);

  return (
    <div className="chat-list">
      {conversations.map((conversation) => (
        <ChatItem
          key={conversation.id}
          conversation={conversation}
          onSelect={onConversationSelect}
        />
      ))}
    </div>
  );
}

export default ChatList;