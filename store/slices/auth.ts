import { createSlice } from '@reduxjs/toolkit';
import { json } from 'stream/consumers';

export const initialState = {
  access_token: '',
  token_type: ''
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
    }
  }
});

export const authMiddleware = (store) => (next) => (action) => {
  if (auth.actions.setAuthAccess.match(action)) {
    localStorage.setItem('bima_security', JSON.stringify(action.payload));
  } else if (auth.actions.logout.match(action)) {
    localStorage.removeItem('bima_security');
  }
  return next(action);
};
export const { setAuthAccess } = auth.actions;
export const authAccessSelector = (state) => state.auth;

export default auth.reducer;
