import { createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';
import {
  getLocalAuthToken,
  removeLocalAuthToken,
  setLocalAuthToken
} from '../../utils/Utils';

export const initialState = {
  access_token: '',
  token_type: '',
  userInfo: null
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthAccess: (state, { payload }) => {
      state.access_token = payload.access_token;
      state.token_type = payload.token_type;
    },
    logout: (state) => {
      state.access_token = '';
      state.token_type = '';
    },
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    }
  }
});

export const authMiddleware = (store) => (next) => (action) => {
  const authLocalCredentials = getLocalAuthToken();
  const authStoreCredentials = store.getState();
  if (
    !isEmpty(authLocalCredentials) &&
    authStoreCredentials.auth.access_token === ''
  ) {
    next(setAuthAccess(authLocalCredentials));
  }
  if (auth.actions.setAuthAccess.match(action)) {
    setLocalAuthToken(action.payload);
  } else if (auth.actions.logout.match(action)) {
    removeLocalAuthToken();
  }
  return next(action);
};
export const { setAuthAccess, logout, setUserInfo } = auth.actions;
export const authAccessSelector = (state) => state.auth;
export const authUserInfoSelector = (state) => state.auth.userInfo;

export default auth.reducer;
