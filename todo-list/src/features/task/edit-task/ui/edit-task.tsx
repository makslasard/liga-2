import React from 'react';
import { Button, Checkbox } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Tags } from '../../../../shared/ui/Tags/Tags';
import { updateTaskById } from '../api/updateTaskById';
import { Input } from '../../../../shared/ui/Input/Input';
import { IEditTask, IEditTaskProps } from '../types/types';
import { validationFormAddTask } from '../../create-task/lib/validationFormAddTask';
import { DeleteTask } from '../../delete-task';
import styles from 'pages/edit-task/EditTaskPage.module.scss';
import { createFormHandlers } from 'pages/edit-task/lib/formHandlers';

export const EditTask: React.FC<IEditTaskProps> = ({ optionEditedTask }) => {
  const { taskId, nameTask, infoTask, importantStatus, completedStatus } = optionEditedTask;

  const { handleSubmit, setValue } = useForm<IEditTask>({
    defaultValues: optionEditedTask,
    mode: 'onChange',
    resolver: yupResolver(validationFormAddTask),
  });

  const formHandlers = createFormHandlers(setValue);

  const onSubmit = (data: IEditTask) => {
    updateTaskById(data, data.taskId);
  };

  // Рассмотреть вариант вынести в отдельный компонент <Form />
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapperForm}>
        <div className={styles.task}>
          <div className={styles.title}>
            <h3>
              <Input type="text" value={nameTask} onChange={formHandlers.onNameTaskChange} />
            </h3>
          </div>
          <div className={styles.description}>
            <Input type="text" value={infoTask} onChange={formHandlers.onInfoTaskChange} />
          </div>
          <div className={styles.tags}>
            <Tags isImportant={importantStatus} isCompleted={completedStatus} />
            <div>
              <Checkbox checked={importantStatus} onChange={formHandlers.onImportantStatusChange} />
              <Checkbox checked={completedStatus} onChange={formHandlers.onCompletedStatusChange} />
            </div>
          </div>
          <div className={styles.buttons}>
            <div>
              <Button type="submit" className={styles.buttonSubmit}>
                Редактировать задачу
              </Button>
            </div>
            <div>
              <DeleteTask deleteTaskId={taskId} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
