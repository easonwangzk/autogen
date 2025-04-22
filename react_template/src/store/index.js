// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from './reducers/conversationReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    conversation: conversationReducer,
    user: userReducer
  }
});

export default store;