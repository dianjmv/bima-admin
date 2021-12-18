import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  sidebarIsOpen: false
};

const sidebar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebarStatus: (state, { payload }) => {
      state.sidebarIsOpen = payload;
    }
  }
});
export const { setSidebarStatus } = sidebar.actions;
export const sidebarSelector = (state) => state.sidebar;

export default sidebar.reducer;
