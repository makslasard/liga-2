import React from 'react';
import { useForm } from 'react-hook-form';
import { Loader } from '../../shared/ui/Loader/Loader';
import FormField from '../../shared/ui/FormFields/FormFields';
import { Button } from '../../shared/ui/Button/Button';
import { Tags } from '../../shared/ui/Tags/Tags';
import { EditTask } from '../../features/task/edit-task';
import { selectorCurrentTaskById } from '../../features/task/edit-task/model/selectors';
import { IEditTask } from '../../features/task/edit-task/types/types';
import styles from './EditTaskPage.module.scss';
import { useTypedSelector } from 'app/store/types/typedHooks';
import { TaskFieldNames } from 'pages/edit-task/types/TaskPage.types';
import { createFormHandlers } from 'pages/edit-task/lib/formHandlers';

export const EditTaskPage: React.FC = () => {
  const currentTaskById = useTypedSelector(selectorCurrentTaskById);
  const isLoading = useTypedSelector((state) => state.currentTaskById.isLoading);

  const { handleSubmit, reset, control, setValue } = useForm<IEditTask>();

  const formHandlers = createFormHandlers(setValue);

  const onSubmit = () => {};

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {currentTaskById?.editStatus ? (
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

              <div className={styles.tags}>
                <Tags isImportant={currentTaskById.importantStatus} isCompleted={currentTaskById.completedStatus} />
              </div>
            </form>
          ) : (
            <div>
              {currentTaskById ? <EditTask optionEditedTask={currentTaskById} /> : 'Задача не найдена!'}

              <div className={styles.buttons}>
                <Button type="submit">Сохранить</Button>
                <Button type="reset" onClick={() => reset()}>
                  Очистить форму
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
