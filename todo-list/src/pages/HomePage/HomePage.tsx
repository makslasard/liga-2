import React from 'react';

import { HeaderLayout } from '../../layouts/HeaderLayout/HeaderLayout';
import styles from './HomePage.module.scss';
import { TaskList } from 'modules/TaskList/TaskList';
import { Pagination } from 'components/Pagination/Pagination';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <HeaderLayout />
      </div>
      <div>
        <TaskList />
      </div>
      <div>
        <Pagination currentPage={1} totalPages={10} />
      </div>
    </div>
  );
};
