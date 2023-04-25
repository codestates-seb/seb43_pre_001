import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import expireReducer from 'redux-persist-expire';
import jwt_decode from 'jwt-decode';

import { userSlice } from '../reducer/userSlice';
import { authSlice } from '../reducer/authSlice';
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
      expireSeconds: (state) => {
        const exp = jwt_decode(state.auth.accessToken).exp;
        const now = Date.now() / 1000;
        return exp - now;
      },
      expiredState: {
        accessToken: null,
        isAuthenticated: false,
      },
      autoExpire: true,
      stateExpireKey: 'auth.accessToken.exp',
    }),
    expireReducer('user', {
      expireSeconds: (state) => {
        const exp = jwt_decode(state.auth.accessToken).exp;
        const now = Date.now() / 1000;
        return exp - now;
      },
      expiredState: {
        memberId: null,
        nickname: null,
        loggedIn: false,
      },
      autoExpire: true,
      stateExpireKey: 'auth.accessToken.exp',
    }),
  ],
};

const persist = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persist,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
