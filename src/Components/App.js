import React, { useState } from "react";
import ChatList from "./ChatList";
import MessageList from "./MessageList";
import Login from "./Login";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleConversationSelect = (conversationId) => {
    setSelectedConversation(conversationId);
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedConversation(null);
  };

  return (
    <div className="App">
      {user ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <ChatList onConversationSelect={handleConversationSelect} />
          {selectedConversation && (
            <MessageList conversationId={selectedConversation} />
          )}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
