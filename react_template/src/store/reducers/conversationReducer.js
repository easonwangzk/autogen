// src/store/reducers/conversationReducer.js
import { createSlice } from '@reduxjs/toolkit';

const conversationSlice = createSlice({
  name: 'conversation',
  initialState: {
    messages: [],
    history: [],
    isLoading: false,
    error: null,
    lastMessageTimestamp: null
  },
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        ...action.payload,
        timestamp: new Date().toISOString()
      });
      state.lastMessageTimestamp = new Date().toISOString();
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        ...action.payload,
        timestamp: new Date().toISOString()
      });
      state.lastMessageTimestamp = new Date().toISOString();
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addToHistory: (state, action) => {
      state.history.unshift({
        ...action.payload,
        id: `hist-${Date.now()}`
      });
      // Keep only last 50 conversations in history
      if (state.history.length > 50) {
        state.history = state.history.slice(0, 50);
      }
    },
    clearMessages: (state) => {
      state.messages = [];
      state.error = null;
      state.isLoading = false;
    }
  }
});

export const { 
  sendMessage, 
  receiveMessage, 
  setLoading, 
  setError, 
  addToHistory, 
  clearMessages 
} = conversationSlice.actions;

export default conversationSlice.reducer;