import { createSlice } from '@reduxjs/toolkit';

const initialStateUser = {
  name: null,
  email: null,
  password: null,
  loggedIn: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    login: (state, action) => {
      state = action.payload;
      console.log(state);
    },
    logout: (state) => {
      state = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
