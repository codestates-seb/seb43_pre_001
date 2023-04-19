import { configureStore } from '@reduxjs/toolkit';
import askSlice from '../reducer/askSlice';

const store = configureStore({
  reducer: {
    ask: askSlice.reducer,
  },
});

export default store;
