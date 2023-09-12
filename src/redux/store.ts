// store.ts

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import todoReducer from './features/todoSlice' // Import your userApi
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    todo: todoReducer, // Add your todoReducer to the store
    // [userApi.reducerPath]: userApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   // getDefaultMiddleware().concat(userApi.middleware),
  // devTools: process.env.NODE_ENV !== 'production',
});

// Set up listeners for the API
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
