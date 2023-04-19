import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../reducer/userSlice';
import askSlice from '../reducer/askSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    ask: askSlice.reducer,
  },
});

export default store;
