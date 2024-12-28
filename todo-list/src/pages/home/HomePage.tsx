import React from 'react';

import { Header } from '../../widgets/header/ui/header';
import { TaskList } from '../../features/task/task-list/ui/task-list';
import { PaginationBase } from '../../features/pagination';

import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Header />
      </div>
      <div>
        <TaskList />
      </div>
      <div>
        <PaginationBase />
      </div>
    </div>
  );
};
