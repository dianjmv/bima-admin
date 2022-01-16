import { useAppAction, useAppSelector } from '../hooks';
import {
  AUTH_NAMESPACE,
  logout,
  setAuthAccess,
  setUserInfo
} from './authSlice';

export const useAuthSelector = () =>
  useAppSelector((state) => state[AUTH_NAMESPACE]);

export const useSetAuthAccess = () => useAppAction(setAuthAccess);
export const useLogout = () => useAppAction(logout);
export const useSetUserInfo = () => useAppAction(setUserInfo);
