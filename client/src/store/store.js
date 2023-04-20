import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../reducer/userSlice';
import askSlice from '../reducer/askSlice';
import questionSlice from '../reducer/questionSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    ask: askSlice.reducer,
    questions: questionSlice.reducer,
  },
});

export default store;
