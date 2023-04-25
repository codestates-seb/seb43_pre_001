import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import expireReducer from 'redux-persist-expire';

import { userSlice, logout } from '../reducer/userSlice';
import { authSlice, removeToken } from '../reducer/authSlice';
import askSlice from '../reducer/askSlice';
import questionSlice from '../reducer/questionSlice';
import sidebarSlice from '../reducer/sidebarSlice';
import answerSlice from '../reducer/answerSlice';

const reducers = combineReducers({
  user: userSlice.reducer,
  auth: authSlice.reducer,
  ask: askSlice.reducer,
  answer: answerSlice.reducer,
  questions: questionSlice.reducer,
  sidebar: sidebarSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'auth'],
  blacklist: ['ask', 'answer', 'questions', 'sidebar'],
  transforms: [
    expireReducer('auth', {
      expireSeconds: 3600,
      autoExpire: true,
      persistedAtKey: 'auth_exp',
      expiredAction: removeToken,
    }),
    expireReducer('user', {
      expireSeconds: 3600,
      autoExpire: true,
      persistedAtKey: 'auth_exp',
      expiredAction: logout,
    }),
  ],
};

const persist = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persist,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
