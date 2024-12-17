import { Middleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const configureMiddleware = (getDefaultMiddleware: any): Middleware[] => {
  return getDefaultMiddleware().concat(logger);
};
