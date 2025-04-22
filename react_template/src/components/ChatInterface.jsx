// src/components/ChatInterface.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { processUserMessage } from '../store/actions/conversationActions';

const ChatInterface = () => {
  const [input, setInput] = useState('');
  const chatRef = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector(state => state.conversation.messages);
  const isLoading = useSelector(state => state.conversation.isLoading);
  const error = useSelector(state => state.conversation.error);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      dispatch(processUserMessage(input.trim()));
      setInput('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg h-[80vh] flex flex-col">
      <div className="flex-1 overflow-y-auto p-4" ref={chatRef}>
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`mb-4 ${
              msg.type === 'USER' ? 'text-right' : 'text-left'
            }`}
          >
            <div className={`inline-block max-w-[70%] rounded-lg px-4 py-2 ${
              msg.type === 'USER' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              <p>{msg.content}</p>
              {msg.timestamp && (
                <p className="text-xs opacity-70 mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </p>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center justify-center space-x-2 my-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        )}
        {error && (
          <div className="text-center my-4">
            <p className="text-red-500 bg-red-50 px-4 py-2 rounded-lg inline-block">
              {error}
            </p>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your symptoms..."
            disabled={isLoading}
          />
          <button 
            type="submit"
            className={`px-6 py-2 rounded-lg ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;