import logger from 'redux-logger';

export type Middleware = typeof logger;

export const middleware = (getDefaultMiddleware: () => Middleware[]): Middleware[] => {
  return getDefaultMiddleware().concat(logger);
};
