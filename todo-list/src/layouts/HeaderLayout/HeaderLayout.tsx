import React from 'react';

import styles from './HeaderLayout.module.scss';
import { FormAddTasks } from 'modules/FormAddTasks/FormAddTasks';
import { SearchInput } from 'modules/SearchInput/SearchInput';
import { SelectFilter } from 'modules/SelectFilter/SelectFilter';

export const HeaderLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <FormAddTasks />
      </div>
      <hr />
      <div>
        <SearchInput />
      </div>
      <div>
        <SelectFilter />
      </div>
    </div>
  );
};
