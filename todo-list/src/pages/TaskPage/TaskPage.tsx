import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import styles from './TaskPage.module.scss';
import { Tags } from 'components/Tags/Tags';

export const TaskPage: React.FC = () => {
  const currentTask = useAppSelector((state) => state.allTasks.currentTaskById);

  return (
    <div className={styles.wrapper}>
      <div>
        <h2>{currentTask.title}</h2>
      </div>
      <div>
        <p>{currentTask.description}</p>
      </div>
      <div>{currentTask.isImportant === true ? <Tags /> : ''}</div>
    </div>
  );
};
