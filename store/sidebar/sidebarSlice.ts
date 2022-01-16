import { createSlice } from '@reduxjs/toolkit';
import sidebarActions from './sidebarActions';

export const initialState = {
  loading: false,
  hasErrors: false,
  sidebarIsOpen: false
};
export const SIDEBAR_NAMESPACE = 'sidebar';

const sidebarSlice = createSlice({
  name: SIDEBAR_NAMESPACE,
  initialState,
  reducers: sidebarActions
});
export const { setSidebarStatus } = sidebarSlice.actions;

export default sidebarSlice;
