import React, { useEffect } from 'react';
import { getAllTasks } from '../api/getAllTasks';
import styles from './task-list.module.scss';
import { useTypedDispatch, useTypedSelector } from 'app/store/types/typedHooks';

export const TaskList: React.FC = () => {
  const allTasks = useTypedSelector((state) => state.allTasks.allTasks);
  // const isLoading = useTypedSelector((state) => state.allTasks.isLoading);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>Список задач:</h2>
      <div className={styles.tasks}>
        {allTasks.map((task) => (
          <>
            <h1 key={task.taskId}>{task.nameTask}</h1>
          </>
        ))}
      </div>
    </div>
  );
};
