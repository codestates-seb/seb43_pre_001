import { createSlice } from '@reduxjs/toolkit';

const initialQuestions = {
  questionsList: [],
  question: {},
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState: initialQuestions,
  reducers: {
    setQuestions(state, action) {
      state.questionsList = action.payload;
    },
    setDetailQuestion(state, action) {
      state.question = action.payload;
    },
  },
});
export const { setQuestions, setDetailQuestion } = questionsSlice.actions;
export default questionsSlice;
