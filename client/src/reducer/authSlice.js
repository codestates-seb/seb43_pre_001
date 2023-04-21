import { createSlice } from '@reduxjs/toolkit';

const initialStateAuth = {
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    setAccessToken: (state, action) => {
      return { ...state, ...action.payload, isAuthenticated: true };
    },
    setRefreshToken: (state, action) => {
      return { ...state, ...action.payload, isAuthenticated: true };
    },
    removeToken: (state) => {
      return { ...state, accessToken: null, refreshToken: null, isAuthenticated: false };
    },
  },
});

export const { setAccessToken, setRefreshToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
