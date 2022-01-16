import { useAppAction, useAppSelector } from '../hooks';
import { setSidebarStatus, SIDEBAR_NAMESPACE } from './sidebarSlice';

//setSidebarStatus
export const useSidebarSelector = () =>
  useAppSelector((state) => state[SIDEBAR_NAMESPACE]);
export const useSetSidebarStatus = () => useAppAction(setSidebarStatus);
