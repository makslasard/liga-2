import React from 'react';

import { CreateTask } from '../../../features/task/create-task/ui/create-task';
import { SearchTask } from '../../../features/input/search-task/ui/search-task';
import { SelectFilter } from '../../../features/select/select-filter/ui/select-filter';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <CreateTask />
      </div>
      <hr />
      <div>
        <SearchTask />
      </div>
      <div>
        <SelectFilter />
      </div>
    </div>
  );
};
