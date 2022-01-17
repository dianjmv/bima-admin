import { createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';
import {
  getLocalAuthToken,
  removeLocalAuthToken,
  setLocalAuthToken
} from '../../utils/Utils';
import authActions from './authActions';

export const initialState = {
  access_token: '',
  token_type: '',
  userInfo: null
};
export const AUTH_NAMESPACE = 'auth';
const authSlice = createSlice({
  name: AUTH_NAMESPACE,
  initialState,
  reducers: authActions
});

export const authMiddleware = (store) => (next) => (action) => {
  const authLocalCredentials = getLocalAuthToken();
  const authStoreCredentials = store.getState();
  if (
    !isEmpty(authLocalCredentials) &&
    authStoreCredentials?.rootReducer?.auth?.access_token === ''
  ) {
    next(setAuthAccess(authLocalCredentials));
  }
  if (authSlice.actions.setAuthAccess.match(action)) {
    setLocalAuthToken(action.payload);
  } else if (authSlice.actions.logout.match(action)) {
    removeLocalAuthToken();
  }
  return next(action);
};
export const { setAuthAccess, logout, setUserInfo } = authSlice.actions;

export default authSlice;
