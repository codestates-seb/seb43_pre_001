import { createSlice } from '@reduxjs/toolkit';

const initialStateUser = {
  member_id: null,
  email: null,
  nickname: null,
  loggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    login: (state, action) => {
      return { ...state, ...action.payload, member_id: '1', nickname: 'chimmy', loggedIn: true }; //  member_id, nickname 값은 임시임
    },
    logout: (state) => {
      return {
        ...state,
        member_id: null,
        nickname: null,
        email: null,
        loggedIn: false,
      };
    },
    changeName: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { login, logout, changeName } = userSlice.actions;
export default userSlice.reducer;
