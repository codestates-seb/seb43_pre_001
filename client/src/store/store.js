import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import expireReducer from 'redux-persist-expire';
import jwt_decode from 'jwt-decode';

import { userSlice } from '../reducer/userSlice';
import { authSlice, selectAccessToken } from '../reducer/authSlice';
import askSlice from '../reducer/askSlice';
import questionSlice from '../reducer/questionSlice';
import sidebarSlice from '../reducer/sidebarSlice';

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
  sidebar: sidebarSlice.reducer,
});


const createPersistConfig = (accessToken) => {
  const persistConfig = {
    key: 'createPersistConfig',
    storage,
    whitelist: ['user', 'auth'],
    blacklist: ['ask', 'questions','sidebar'],
    transforms: [],
  };

  if (accessToken !== null || undefined) {
    try {
      const decodedToken = jwt_decode(accessToken);
      const expireSeconds = decodedToken.exp - Date.now() / 1000;

      persistConfig.transforms.push(
        expireReducer('auth', {
          expireSeconds,
          expiredState: { token: null, isAuthenticated: false },
          autoExpire: true,
        }),
        expireReducer('user', {
          expireSeconds,
          expiredState: null,
          autoExpire: true,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }

  return persistConfig;
};

const store = configureStore({
  reducer: persistReducer(createPersistConfig(selectAccessToken), reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
