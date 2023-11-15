import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllTasks } from '../../api/allTasksApi/allTasksApi';
import { ChangeMeType } from '../../types/commonTypes';
import styles from './TaskList.module.scss';
import { Task } from 'modules/TaskList/Task/Task';
import { Loader } from 'components/Loader/Loader';

export const TaskList: React.FC = () => {
  const allTasks = useAppSelector((state) => state.allTasks.allTasks);
  const isLoading = useAppSelector((state) => state.allTasks.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch<ChangeMeType>(getAllTasks()); // Костыль
  }, [dispatch]);

  const memoizedTasks = useMemo(() => {
    return allTasks.map((item) => <Task key={item.id} {...item} />);
  }, [allTasks]);

  return (
    <div className={styles.wrapper}>
      <h2>Список задач:</h2>
      <div className={styles.tasks}>{isLoading === true ? <Loader /> : memoizedTasks}</div>
    </div>
  );
};
