// src/store/reducers/userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {
      name: '',
      email: '',
      age: null,
      gender: '',
      conditions: [],
    },
    isAuthenticated: false,
    loading: false,
    error: null
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { 
  setProfile, 
  updateProfile, 
  setAuthenticated, 
  setLoading, 
  setError 
} = userSlice.actions;

export default userSlice.reducer;