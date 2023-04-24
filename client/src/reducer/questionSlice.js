import { createSlice } from '@reduxjs/toolkit';

const initialQuestions = {
  questionsList: [],
  question: {},
  pageInfo: {},
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
    setPageInfo(state, action) {
      state.pageInfo = action.payload;
    },
  },
});
export const { setQuestions, setDetailQuestion, setPageInfo } = questionsSlice.actions;
export default questionsSlice;
