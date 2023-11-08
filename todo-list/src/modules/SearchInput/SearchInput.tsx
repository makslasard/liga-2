import React from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { searchTasksActions } from '../../store/reducers/searchTasks/searchTasksSlice';
import styles from './SearchInput.module.scss';
import { Input } from 'components/Input/Input';

export const SearchInput: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <h2>Найти задачу:</h2>
      <Input
        type="text"
        placeholder="Поиск..."
        onChange={(event) => dispatch(searchTasksActions.setSearchQuery(event.target.value))}
      />
    </div>
  );
};
