import { createSlice } from '@reduxjs/toolkit';

const initialStateUser = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    login: (state, action) => {
      return Object.assign({}, state, action.payload);
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
