import { useAppAction } from '../hooks';
import { setSidebarStatus, SIDEBAR_NAMESPACE } from './sidebarSlice';
import { useAppSelector } from '../hook';

//setSidebarStatus
export const useSidebarSelector = () =>
  useAppSelector((state) => state.rootReducer[SIDEBAR_NAMESPACE]);
export const useSetSidebarStatus = () => useAppAction(setSidebarStatus);
