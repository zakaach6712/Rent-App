import React, { useState } from 'react';
import ChatBubble from '../components/ChatBubble';
import './Chat.css';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome! How can we help you?', isUser: false }
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input) return;
    setMessages([...messages, { id: Date.now(), text: input, isUser: true }]);
    setInput('');
  };
    const handleKey = (e) => {
    if (e.key === 'Enter') send();
  };
  
  return (
    <div className="chat-page">
      <h1>Support Chat</h1>
      <div className="chat-window">
        {messages.map((m) => (
          <ChatBubble key={m.id} message={m.text} isUser={m.isUser} />
        ))}
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}
