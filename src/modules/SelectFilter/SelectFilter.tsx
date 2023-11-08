import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filtersTasksActions } from '../../store/reducers/filtersTasks/filtersTasksSlice';
import styles from './SelectFilter.module.scss';
import { IFilter } from 'modules/SelectFilter/SelectFilter.types';

export const SelectFilter: React.FC = () => {
  const filtersTasks = useAppSelector((state) => state.filtersTasks.filtersTask);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <h2>Фильтр задач:</h2>
      <select
        onChange={(event) => dispatch(filtersTasksActions.setCurrentFilter(event.target.value))}
        name="select"
        id="1"
        className={styles.select}>
        {filtersTasks?.map((filter: IFilter) => (
          <option key={filter.id} value={filter.name}>
            {filter.name}
          </option>
        ))}
      </select>
    </div>
  );
};
