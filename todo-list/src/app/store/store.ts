import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';
import { configureMiddleware } from 'app/store/middleware';

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: configureMiddleware,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
