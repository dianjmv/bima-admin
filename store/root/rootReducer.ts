import { combineReducers } from 'redux';
import version from '../version';
import authSlice, { AUTH_NAMESPACE } from '../auth/authSlice';
import sidebarSlice, { SIDEBAR_NAMESPACE } from '../sidebar/sidebarSlice';

export default combineReducers({
  version: (state: number = version) => state,
  [AUTH_NAMESPACE]: authSlice.reducer,
  [SIDEBAR_NAMESPACE]: sidebarSlice.reducer
});
