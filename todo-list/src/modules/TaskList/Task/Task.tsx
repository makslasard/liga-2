import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { ITask } from '../../../types/Task/Task.types';
import { useAppDispatch } from '../../../hooks/redux';
import { allTasksActions } from '../../../store/reducers/allTasks/allTasksSlice';
import { deleteTaskById, getTaskById } from '../../../api/allTasksApi/allTasksApi';
import { ChangeMeType } from '../../../types/commonTypes';
import styles from './Task.module.scss';
import { Button } from 'components/Button/Button';
import { Checkbox } from 'components/Checkbox/Checkbox';
import { Important } from 'components/Tags/Important/Important';
import { Done } from 'components/Tags/Done/Done';

export const Task: React.FC<ITask> = ({ id, name, info, isCompleted, isImportant }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitOpen = () => {
    dispatch<ChangeMeType>(getTaskById(id));
    navigate(`/tasks/${id}`);
  };

  const handleSubmitDelete = () => {
    dispatch<ChangeMeType>(deleteTaskById(id));
  };

  const handleSubmitCheckbox = (isChecked: boolean) => {
    const currentTask: ITask = { id, name, info, isImportant, isCompleted: isChecked };

    if (isChecked) {
      setIsChecked(isChecked);
      dispatch(allTasksActions.updateTask({ updateTask: currentTask }));
    } else {
      dispatch(allTasksActions.updateTask({ updateTask: currentTask }));
    }
  };

  return (
    <div className={isCompleted ? styles.completed : styles.wrapper}>
      <div className={styles.wrapperInfo}>
        <div>
          <Checkbox
            className={styles.completedTask}
            checked={isChecked}
            type="checkbox"
            role="checkbox"
            ariaLabel="Выполнить задачу"
          />
        </div>
        <div>
          <div className={styles.info}>
            <div className={styles.title}>
              <h3>{name}</h3>
            </div>
          </div>
          <div className={styles.description}>
            <p>{info}</p>
          </div>
          <div className={styles.tags}>
            <div>{isImportant ? <Important /> : ''}</div>
            <div>{isCompleted ? <Done /> : ''}</div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.update}>
          <Button type="button" onClick={handleSubmitOpen}>
            Открыть
          </Button>
        </div>
        <div className={styles.delete}>
          <Button type="button" onClick={handleSubmitDelete}>
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
};
