import { useAppAction } from '../hooks';
import {
  AUTH_NAMESPACE,
  logout,
  setAuthAccess,
  setUserInfo
} from './authSlice';
import { useAppSelector } from '../hook';

export const useAuthSelector = () =>
  useAppSelector((state) => state.rootReducer[AUTH_NAMESPACE]);

export const useSetAuthAccess = () => useAppAction(setAuthAccess);
export const useLogout = () => useAppAction(logout);
export const useSetUserInfo = () => useAppAction(setUserInfo);
