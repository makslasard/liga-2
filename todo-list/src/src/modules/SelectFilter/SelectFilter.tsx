import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filtersTasksActions } from '../../store/reducers/filtersTasks/filtersTasksSlice';
import { getTasksByFilter } from '../../api/allTasksApi/allTasksApi';
import { ChangeMeType } from '../../types/commonTypes';
import styles from './SelectFilter.module.scss';
import { IFilter } from 'modules/SelectFilter/SelectFilter.types';

export const SelectFilter: React.FC = () => {
  const filtersTasks = useAppSelector((state) => state.filtersTasks.filtersTask);
  const [isImportant, setIsImportant] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch<ChangeMeType>(getTasksByFilter(isImportant, isCompleted));
  }, [dispatch, isImportant, isCompleted]);

  const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value;
    dispatch(filtersTasksActions.setCurrentFilter({ filter: filter }));

    if (filter === 'Important') {
      setIsImportant(true);
      setIsCompleted(false);
    } else {
      setIsImportant(false);
    }

    if (filter === 'Done') {
      setIsCompleted(true);
      setIsImportant(false);
    } else {
      setIsCompleted(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2>Фильтр задач:</h2>
      <select onChange={handleChangeFilter} name="select" className={styles.select}>
        {filtersTasks?.map((filter: IFilter) => (
          <option key={filter.id} value={filter.name}>
            {filter.name}
          </option>
        ))}
      </select>
    </div>
  );
};
