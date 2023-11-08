import React, { useState } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { allTasksActions } from '../../store/reducers/allTasks/allTasksSlice';
import { ITask } from '../../types/Task/Task.types';
import styles from './FormAddTasks.module.scss';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { Checkbox } from 'components/Checkbox/Checkbox';

export const FormAddTasks: React.FC = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isImportant, setIsImportant] = useState<boolean>(false);
  // const [titleHasError, setTitleHasError] = useState<boolean>(false);
  // const [descriptionHasError, setDescriptionHasError] = useState<boolean>(false);

  const isDisabled = title.trim().length === 0 || description.trim().length === 0;

  const createTask = () => {
    // setTitleHasError(true);
    // setDescriptionHasError(true);

    if (!isDisabled) {
      const newTask: ITask = {
        id: Date.now(),
        title: title,
        description: description,
        isCompleted: false,
        isImportant: isImportant,
      };
      dispatch(allTasksActions.addTask(newTask));

      setTitle('');
      setDescription('');
      setIsImportant(false);
    }
  };

  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    // setTitleHasError(false);
  };

  const changeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
    // setDescriptionHasError(false);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Создать задачу:</h2>
      <form action="" className={styles.form}>
        <div className={styles.newTask}>
          {/*{titleHasError && <div className={styles.error}>Поле Название задачи обязательно для заполнения!</div>}*/}
          <Input type="text" value={title} placeholder="Название задачи" onChange={changeTitle} />
        </div>
        <div className={styles.descriptionTask}>
          {/*{descriptionHasError && <div className={styles.error}>Поле Описание задачи обязательно для заполнения!</div>}*/}
          <Input type="text" value={description} placeholder="Описание задачи" onChange={changeDescription} />
        </div>
        <div className={styles.checkbox}>
          <Checkbox isChecked={isImportant} onChange={(isChecked: boolean) => setIsImportant(isChecked)} />
          <div>
            <span>Важная задача</span>
          </div>
        </div>
        <div className={styles.button}>
          <Button disabled={isDisabled} onClick={createTask}>
            Создать задачу
          </Button>
        </div>
      </form>
    </div>
  );
};
