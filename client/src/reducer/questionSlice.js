import { createSlice } from '@reduxjs/toolkit';

//  member_id: null, // number
//   question_id: null, // number
//   title: null, // string
//   content: null, // string
//   created_at: null // string
const initialQuestions = [
  {
    member_id: 1,
    question_id: 10,
    title: '1번제목',
    content: '1번내용',
    created_at: 'now',
  },
];

const questionsSlice = createSlice({
  name: 'questions',
  initialState: initialQuestions,
  reducers: {
    getAllQuestions(state, action) {
      // return {...state, questions:action.payload}
      state.questionsList = action.payload.data;
    },
  },
});
export const { getAllQuestions } = questionsSlice.actions;
export default questionsSlice;
