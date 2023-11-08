import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { allTasksActions } from '../../store/reducers/allTasks/allTasksSlice';
import styles from './TaskList.module.scss';
import { Task } from 'modules/TaskList/Task/Task';

export const TaskList: React.FC = () => {
  const filteredTasks = useAppSelector((state) => state.allTasks.filteredTasks);
  const currentFilter = useAppSelector((state) => state.filtersTasks.currentFilter);
  const searchQuery = useAppSelector((state) => state.searchTasks.searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allTasksActions.updateFilteredTasks({ filter: currentFilter, searchQuery }));
  }, [currentFilter, searchQuery, dispatch]);

  return (
    <div className={styles.wrapper}>
      <h2>Список задач:</h2>
      <div className={styles.tasks}>
        {filteredTasks.length === 0 ? (
          <div>
            <h3>Список задач пуст!</h3>
          </div>
        ) : (
          <div>
            {filteredTasks.map((item) => (
              <Task key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
