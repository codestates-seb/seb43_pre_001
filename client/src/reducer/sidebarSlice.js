import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: 'Questions',
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: initialState,
  reducers: {
    setSidebar(state, action) {
      state.menu = action.payload;
    },
  },
});
export const { setSidebar } = sidebarSlice.actions;
export default sidebarSlice;
