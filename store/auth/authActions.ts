const authActions = {
  setAuthAccess: (state, { payload }) => {
    state.access_token = payload.access_token;
    state.token_type = payload.token_type;
  },
  logout: (state) => {
    state.access_token = '';
    state.token_type = '';
  },
  setUserInfo: (state, { payload }) => {
    state.userInfo = payload;
  }
};
export default authActions;
