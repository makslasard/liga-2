import React, { ChangeEvent, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ITask } from '../../types/Task/Task.types';
import { updateTaskById } from '../../api/allTasksApi/allTasksApi';
import { ChangeMeType } from '../../types/commonTypes';
import styles from './TaskPage.module.scss';
import { Loader } from 'components/Loader/Loader';
import { ChangedTaskForm } from 'pages/TaskPage/TaskPage.types';
import { Important } from 'components/Tags/Important/Important';
import { Done } from 'components/Tags/Done/Done';

export const TaskPage: React.FC = () => {
  const currentTaskById = useAppSelector((state) => state.allTasks.currentTaskById);
  const [currentStatusChange, setCurrentStatusChange] = useState<boolean>(false);
  const isLoading = useAppSelector((state) => state.allTasks.isLoading);
  const dispatch = useAppDispatch();

  const getTaskDefaultValues = (task: ITask[] | null): ChangedTaskForm => {
    return task?.reduce(
      (acc, task) => ({
        ...acc,
        id: task.id,
        name: task.name,
        info: task.info,
        isImportant: task.isImportant,
        isCompleted: task.isCompleted,
      }),
      {}
    ) as ChangedTaskForm;
  };
  const defaultValue = getTaskDefaultValues(currentTaskById);

  const { handleSubmit, reset, control, setValue } = useForm<ChangedTaskForm>({
    defaultValues: defaultValue,
  });

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('name', evt.target.value);
  const onInfoChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('info', evt.target.value);
  const onImportantChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('isImportant', evt.target.checked);
  const onCompletedChange = (evt: ChangeEvent<HTMLInputElement>) => setValue('isCompleted', evt.target.checked);

  const onSubmit = (data: ChangedTaskForm) => {
    const changedTask: ITask = {
      id: defaultValue.id,
      name: data.name,
      info: data.info,
      isImportant: data.isImportant,
      isCompleted: data.isCompleted,
    };

    dispatch<ChangeMeType>(updateTaskById(changedTask, defaultValue.id));
    reset();
  };

  return (
    <div className={styles.wrapper}>
      {isLoading === true ? (
        <Loader />
      ) : (
        <div>
          {currentStatusChange === true ? (
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapperForm}>
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

                <div className={styles.tags}>
                  <div className={styles.importantTag}>{defaultValue.isImportant === true ? <Important /> : ''}</div>
                  <div className={styles.completedTag}>{defaultValue.isCompleted === true ? <Done /> : ''}</div>
                </div>

                <div className={styles.buttons}>
                  <button type="submit" className={styles.buttonSubmit}>
                    Сохранить
                  </button>
                  <button type="reset" onClick={() => reset()} className={styles.buttonReset}>
                    Очистить форму
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              {currentTaskById?.map((item) => (
                <div key={item.id} className={styles.task}>
                  <div className={styles.title}>
                    <h3>{item.name}</h3>
                  </div>
                  <div className={styles.description}>
                    <p contentEditable={true}>{item.info}</p>
                  </div>
                  <div className={styles.tags}>
                    <div>{item.isImportant === true ? <Important /> : ''}</div>
                    <div>{item.isCompleted === true ? <Done /> : ''}</div>
                  </div>
                  <div className={styles.buttons}>
                    <button type="submit" className={styles.buttonSubmit} onClick={() => setCurrentStatusChange(true)}>
                      Редактировать задачу
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
