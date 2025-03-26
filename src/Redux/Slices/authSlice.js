import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

// Try to load user info from localStorage
const savedUser = localStorage.getItem('user');
const savedToken = localStorage.getItem('token');

if (savedUser && savedToken) {
  initialState.isAuthenticated = true;
  localStorage.setItem("isAuthenticated",JSON.stringify(true)); //
  initialState.user = JSON.parse(savedUser);
  initialState.token = savedToken;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
      // Persist to localStorage
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      // Clear localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
