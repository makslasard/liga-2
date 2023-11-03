import React from 'react';

import { useNavigate } from 'react-router-dom';
import { ITask } from '../../../types/Task/Task.types';
import styles from './Task.module.scss';
import { Button } from 'components/Button/Button';
import { RoutersNames } from 'router/router';

export const Task: React.FC<ITask> = ({ id, title, description, isCompleted, isImportant }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.info}>
          <div className={styles.numberTask}>
            <span>{id}.</span>
          </div>
          <div className={styles.title}>
            <h3>{title}</h3>
          </div>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.update}>
          <Button onClick={() => navigate(RoutersNames.TASK)}>Открыть</Button>
        </div>
        <div className={styles.delete}>
          <Button>Удалить</Button>
        </div>
      </div>
    </div>
  );
};
