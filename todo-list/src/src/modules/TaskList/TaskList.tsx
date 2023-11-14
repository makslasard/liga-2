import React, { useEffect } from 'react';
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

  return (
    <div className={styles.wrapper}>
      <h2>Список задач:</h2>
      <div className={styles.tasks}>
        {isLoading === true ? <Loader /> : allTasks.map((item) => <Task key={item.id} {...item} />)}
      </div>
    </div>
  );
};
// {allTasks.length === 0 ? (
//   <div>
//     <h3>Список задач пуст!</h3>
//   </div>
// ) : (
//   <div>{isLoading ? <Pagination /> : allTasks.map((item) => <Task key={item.id} {...item} />)}</div>
// )}
