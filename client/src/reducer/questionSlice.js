import { createSlice } from '@reduxjs/toolkit';

const initialQuestions = {
  questionsList: [],
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState: initialQuestions,
  reducers: {
    setQuestions(state, action) {
      state.questionsList = action.payload;
    },
  },
});
export const { setQuestions } = questionsSlice.actions;
export default questionsSlice;
