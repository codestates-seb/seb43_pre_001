import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { userSlice } from '../reducer/userSlice';
import askSlice from '../reducer/askSlice';
import questionSlice from '../reducer/questionSlice';

const reducers = combineReducers({
  user: userSlice.reducer,
  ask: askSlice.reducer,
  questions: questionSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persist = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persist,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
