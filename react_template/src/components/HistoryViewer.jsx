// src/components/HistoryViewer.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const HistoryViewer = () => {
  const history = useSelector(state => state.conversation.history);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="font-semibold text-lg mb-4">Consultation History</h2>
      <div className="space-y-4">
        {history.map((session, idx) => (
          <div key={idx} className="border-b pb-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{session.date}</span>
              <span className="text-xs text-gray-500">{session.duration}</span>
            </div>
            <p className="text-sm text-gray-600 truncate">{session.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryViewer;