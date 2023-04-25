import { createSlice } from '@reduxjs/toolkit';

const answerSlice = createSlice({
  name: 'answerSlice',
  initialState: {
    answerContent: null,
    answerId: null,
  },
  reducers: {
    setAnswerContent: (state, action) => {
      state.content = action.payload;
    },
    setAnswerId: (state, action) => {
      state.answerId = action.payload;
    },
  },
});

export default answerSlice;
export const { setAnswerContent, answerContent, setAnswerId } = answerSlice.actions;
