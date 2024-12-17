import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationFormAddTask } from '../lib/validationFormAddTask';
import { IEditTask } from '../../edit-task/types/types';
import FormField from '../../../../shared/ui/FormFields/FormFields';
import { Button } from '../../../../shared/ui/Button/Button';
import { setNewTask } from '../api/setNewTask';
import { defaultValueTaskForm } from '../../../../shared/api/types/types/Task/Task.types';
import styles from './create-task.module.scss';
import { useTypedDispatch } from 'app/store/types/typedHooks';
import { createFormHandlers } from 'pages/edit-task/lib/formHandlers';
import { TaskFieldNames } from 'pages/edit-task/types/TaskPage.types';

export const CreateTask: React.FC = () => {
  const dispatch = useTypedDispatch();

  const { handleSubmit, reset, control, setValue } = useForm<IEditTask>({
    defaultValues: defaultValueTaskForm,
    mode: 'onChange',
    resolver: yupResolver(validationFormAddTask),
  });

  const onSubmit: SubmitHandler<IEditTask> = (data) => {
    setNewTask(data);

    reset();
  };

  const formHandlers = createFormHandlers(setValue);

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapperForm}>
        <FormField
          control={control}
          name={TaskFieldNames.Name}
          type={'text'}
          onChange={formHandlers.onNameTaskChange}
          placeholder={'Название задачи'}
          baseClass={'form-control'}
        />
        <FormField
          control={control}
          name={TaskFieldNames.Info}
          type={'text'}
          onChange={formHandlers.onInfoTaskChange}
          placeholder={'Описание задачи'}
          baseClass={'form-control'}
        />
        <div className={styles.checkboxs}>
          <div className="form-group form-check">
            <FormField
              control={control}
              name={TaskFieldNames.IsImportant}
              type={'checkbox'}
              onChange={formHandlers.onImportantStatusChange}
              baseClass={'form-check-input'}
              label={'Важная задача'}
              htmlFor={TaskFieldNames.IsImportant}
            />
          </div>
          <div className="form-group form-check">
            <FormField
              control={control}
              name={TaskFieldNames.IsCompleted}
              type={'checkbox'}
              onChange={formHandlers.onCompletedStatusChange}
              baseClass={'form-check-input'}
              label={'Выполненная задача'}
              htmlFor={TaskFieldNames.IsCompleted}
            />
          </div>
        </div>

        <div className={styles.buttons}>
          <Button type="submit">Сохранить</Button>
          <Button type="reset" onClick={() => reset()}>
            Очистить форму
          </Button>
        </div>
      </form>
    </div>
  );
};
