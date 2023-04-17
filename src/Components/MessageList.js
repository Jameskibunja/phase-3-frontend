import React, { useState, useEffect } from "react";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";
import "./MessageList.css";

function MessageList({ conversationId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/conversations/${conversationId}/messages`)
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, [conversationId]);

  const handleSendMessage = (text) => {
    fetch(`http://localhost:9292/conversations/${conversationId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((response) => response.json())
      .then((newMessage) => {
        setMessages([...messages, newMessage]);
      });
  };

  return (
    <div className="message-list">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default MessageList;