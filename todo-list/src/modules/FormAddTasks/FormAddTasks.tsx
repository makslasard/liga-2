import React, { ChangeEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ITask } from '../../types/Task/Task.types';
import { useAppDispatch } from '../../hooks/redux';
import { setNewTask } from '../../api/allTasksApi/allTasksApi';
import { ChangeMeType } from '../../types/commonTypes';
import styles from './FormAddTasks.module.scss';
import { TaskSubmitForm } from './FormAddTasks.types';
import { validationSchema } from 'modules/FormAddTasks/validation';

const defaultValues: TaskSubmitForm = {
  name: '',
  info: '',
  isImportant: false,
  isCompleted: false,
};

export const FormAddTasks: React.FC = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, reset, control, setValue } = useForm<TaskSubmitForm>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: TaskSubmitForm) => {
    const newTask: Omit<ITask, 'id'> = {
      name: data.name,
      info: data.info,
      isCompleted: data.isCompleted,
      isImportant: data.isImportant,
    };

    dispatch<ChangeMeType>(setNewTask(newTask));
    reset();
  };

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('name', evt.target.value);
  const onInfoChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('info', evt.target.value);
  const onImportantChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('isImportant', evt.target.checked);
  const onCompletedChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('isCompleted', evt.target.checked);

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2>Создать задачу:</h2>
        <div className="form-group">
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <div>
                <input
                  value={field.value}
                  onChange={onNameChange}
                  type="text"
                  placeholder="Название задачи"
                  className={`form-control ${error?.message ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{error?.message}</div>
              </div>
            )}
          />
        </div>

        <div className="form-group">
          <Controller
            control={control}
            name="info"
            render={({ field, fieldState: { error } }) => (
              <div>
                <input
                  value={field.value}
                  onChange={onInfoChange}
                  type="text"
                  placeholder="Описание задачи"
                  className={`form-control ${error?.message ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{error?.message}</div>
              </div>
            )}
          />
        </div>
        <div className={styles.checkboxs}>
          <Controller
            control={control}
            name="isImportant"
            render={({ field, fieldState: { error } }) => (
              <div className="form-group form-check">
                <input
                  checked={field.value}
                  onChange={onImportantChange}
                  type="checkbox"
                  className={`form-check-input ${error?.message ? 'is-invalid' : ''}`}
                />
                <label htmlFor="isImportant" className="form-check-label">
                  Важная задача
                </label>
              </div>
            )}
          />

          <Controller
            control={control}
            name="isCompleted"
            render={({ field, fieldState: { error } }) => (
              <div className="form-group form-check">
                <input
                  checked={field.value}
                  onChange={onCompletedChange}
                  type="checkbox"
                  className={`form-check-input ${error?.message ? 'is-invalid' : ''}`}
                />
                <label htmlFor="isCompleted" className="form-check-label">
                  Выполненная задача
                </label>
              </div>
            )}
          />
        </div>

        <div className={styles.buttons}>
          <button type="submit" className={styles.buttonSubmit}>
            Создать задачу
          </button>
          <button type="reset" onClick={() => reset()} className={styles.buttonReset}>
            Очистить форму
          </button>
        </div>
      </form>
    </div>
  );
};
