import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { ITask } from '../../../types/Task/Task.types';
import { useAppDispatch } from '../../../hooks/redux';
import { allTasksActions } from '../../../store/reducers/allTasks/allTasksSlice';
import styles from './Task.module.scss';
import { Button } from 'components/Button/Button';
import { Tags } from 'components/Tags/Tags';
import { Checkbox } from 'components/Checkbox/Checkbox';

export const Task: React.FC<ITask> = ({ id, title, description, isCompleted, isImportant }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitOpen = () => {
    navigate(`/tasks/${id}`);
    dispatch(allTasksActions.taskById(id));
  };

  const handleSubmitCheckbox = (isChecked: boolean) => {
    const currentTask: ITask = { id, title, description, isImportant, isCompleted: isChecked };

    if (isChecked) {
      setIsChecked(isChecked);
      dispatch(allTasksActions.updateTask(currentTask));
    } else {
      dispatch(allTasksActions.updateTask(currentTask));
    }
  };

  return (
    <div className={isCompleted ? styles.completed : styles.wrapper}>
      <div className={styles.wrapperInfo}>
        <div>
          <Checkbox className={styles.completedTask} isChecked={isChecked} onChange={handleSubmitCheckbox} />
        </div>
        <div>
          <div className={styles.info}>
            <div className={styles.title}>
              <h3>{title}</h3>
            </div>
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <div>{isImportant ? <Tags /> : ''}</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.update}>
          <Button onClick={handleSubmitOpen}>Открыть</Button>
        </div>
        <div className={styles.delete}>
          <Button onClick={() => dispatch(allTasksActions.deleteTask(id))}>Удалить</Button>
        </div>
      </div>
    </div>
  );
};
