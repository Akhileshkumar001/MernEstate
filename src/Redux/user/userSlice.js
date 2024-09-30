// src/Redux/user/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null; // Reset any previous errors
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload; // Store the user data
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Store the error message
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer;
