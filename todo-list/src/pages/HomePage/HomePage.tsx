import React from 'react';

import { HeaderLayout } from '../../layouts/HeaderLayout/HeaderLayout';
import styles from './HomePage.module.scss';
import { TaskList } from 'modules/TaskList/TaskList';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <HeaderLayout />
      </div>
      <TaskList />
    </div>
  );
};
