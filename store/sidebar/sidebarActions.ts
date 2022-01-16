const sidebarActions = {
  setSidebarStatus: (state: { sidebarIsOpen: boolean }) => {
    state.sidebarIsOpen = !state.sidebarIsOpen;
  }
};
export default sidebarActions;
