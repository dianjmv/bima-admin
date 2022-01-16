import { AppReducerStateType } from '../types';
import authSlice from '../auth/authSlice';
import sidebarSlice from '../sidebar/sidebarSlice';

export interface RootState {
  version: number;
  auth: AppReducerStateType<typeof authSlice.reducer>;
  sidebar: AppReducerStateType<typeof sidebarSlice.reducer>;
}
