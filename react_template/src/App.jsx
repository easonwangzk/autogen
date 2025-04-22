// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ChatInterface from './components/ChatInterface';
import UserProfile from './components/UserProfile';
import HistoryViewer from './components/HistoryViewer';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold text-blue-600">Medical Assistant</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <UserProfile />
            <HistoryViewer />
          </div>
          <div className="col-span-9">
            <ChatInterface />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;