import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import expireReducer from 'redux-persist-expire';

import { userSlice } from '../reducer/userSlice';
import { authSlice } from '../reducer/authSlice';
import askSlice from '../reducer/askSlice';
import questionSlice from '../reducer/questionSlice';

const userPersistConfig = {
  key: 'user',
  storage,
  transforms: [expireReducer('loggedIn', { expireSeconds: 3600 })],
  whitelist: ['member_id', 'email', 'nickname', 'loggedIn'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  transforms: [expireReducer('accessToken', { expireSeconds: 1800 })],
  whitelist: ['accessToken'],
};

const reducers = combineReducers({
  user: userSlice.reducer,
  auth: persistReducer(authPersistConfig, authSlice.reducer),
  ask: askSlice.reducer,
  questions: questionSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'auth'],
  blacklist: ['ask', 'questions'],
};

const persist = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persist,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
