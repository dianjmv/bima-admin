import { configureStore } from '@reduxjs/toolkit';

import { bimaApi } from '../services/bima';
import { setupListeners } from '@reduxjs/toolkit/query';

import rootReducer from './root/rootReducer';
import { authMiddleware } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    rootReducer,
    [bimaApi.reducerPath]: bimaApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bimaApi.middleware).concat(authMiddleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
