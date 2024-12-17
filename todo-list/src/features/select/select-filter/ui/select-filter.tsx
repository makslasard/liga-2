import React from 'react';

import { Select } from '@mui/material';
import { FilterType } from '../types/types';
import { getTasksByFilters } from '../api/getTasksByFilter';
import { filtersTasksActions } from '../model/filtersTasksSlice';
import styles from './select-filter.module.scss';
import { useTypedDispatch, useTypedSelector } from 'app/store/types/typedHooks';

export const SelectFilter: React.FC = () => {
  const filtersList = useTypedSelector((state) => state.filtersTasks.filtersList);
  const dispatch = useTypedDispatch();

  const changeFilter = (filter: FilterType) => {
    dispatch(filtersTasksActions.changeFilter(filter));
    getTasksByFilters(filter);
  };

  return (
    <div className={styles.wrapperSelectFilters}>
      <h2>Фильтр задач:</h2>
      <Select name="select" className={styles.selectFilter}>
        {filtersList?.map((filter: FilterType, indexFilter: number) => (
          <option key={indexFilter} value={filter.nameFilter} onChange={() => changeFilter(filter)}>
            {filter.nameFilter}
          </option>
        ))}
      </Select>
    </div>
  );
};
