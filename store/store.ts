import { configureStore } from '@reduxjs/toolkit';

import { bimaApi } from '../services/bima';
import sidebar from './slices/sidebar';
import { setupListeners } from '@reduxjs/toolkit/query';
import auth, { authMiddleware } from './slices/auth';

export const store = configureStore({
  reducer: {
    sidebar: sidebar,
    [bimaApi.reducerPath]: bimaApi.reducer,
    auth: auth
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bimaApi.middleware).concat(authMiddleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
