import React from 'react';

import { HeaderLayout } from '../layouts/HeaderLayout/HeaderLayout';

import styles from './App.module.scss';
import { AppRouter } from 'router/AppRouter/AppRouter';

export const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <AppRouter />
    </div>
  );
};
