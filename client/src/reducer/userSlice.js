import { createSlice } from '@reduxjs/toolkit';

const initialStateUser = {
  memberId: null,
  member_id: null,
  nickname: null,
  name: null,
  email: null,
  loggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    signup: (state, action) => {
      return { ...state, ...action.payload };
    },
    login: (state, action) => {
      return { ...state, ...action.payload, loggedIn: true };
    },
    logout: (state) => {
      return {
        ...state,
        memberId: null,
        member_id: null,
        nickname: null,
        name: null,
        email: null,
        loggedIn: false,
      };
    },
    changeName: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { signup, login, logout, changeName } = userSlice.actions;
export default userSlice.reducer;
