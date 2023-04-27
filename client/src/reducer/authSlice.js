import { createSlice } from '@reduxjs/toolkit';

const initialStateAuth = {
  accessToken: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    setAccessToken: (state, action) => {
      return { ...state, ...action.payload, isAuthenticated: true };
    },
    removeToken: (state) => {
      return { ...state, accessToken: null, isAuthenticated: false };
    },
  },
});

export const { setAccessToken, removeToken, setExp } = authSlice.actions;
export default authSlice.reducer;
