import { createSlice } from '@reduxjs/toolkit';

const initialStateUser = {
  memberId: null,
  member_id: null,
  nickname: null,
  loggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    login: (state, action) => {
      return { ...state, ...action.payload, loggedIn: true };
    },
    logout: (state) => {
      return {
        ...state,
        memberId: null,
        member_id: null,
        nickname: null,
        loggedIn: false,
      };
    },
    changeName: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { login, logout, changeName, loggedIn, memberId } = userSlice.actions;
export default userSlice.reducer;
