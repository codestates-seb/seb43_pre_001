import { createSlice } from '@reduxjs/toolkit';

const answerSlice = createSlice({
  name: 'answerSlice',
  initialState: {
    answerContent: null,
  },
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export default answerSlice;
export const { setContent, answerContent } = answerSlice.actions;
