import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Input } from '@mui/material'
import { updateTaskById } from '../api/updateTaskById'
import { IEditTaskProps } from '../types/types'
import { DeleteTask } from '../../delete-task'
import { createFormHandlers } from '@/pages/edit-task/lib/formHandlers'
import { Tags } from '@/shared/ui/Tags/Tags'
import { ITask } from '@/shared/types/task/task'

import styles from './EditTask.module.scss'

export const EditTask: React.FC<IEditTaskProps> = ({ optionEditedTask }) => {
  const { id, nameTask, infoTask, importantStatus, completedStatus } =
    optionEditedTask

  const { handleSubmit, setValue } = useForm<ITask>({
    defaultValues: optionEditedTask,
    mode: 'onChange',
    // resolver: yupResolver(validationFormAddTask),
  })

  const formHandlers = createFormHandlers(setValue)

  const onSubmit = (data: ITask) => {
    updateTaskById(data, data.id)
  }

  // Рассмотреть вариант вынести в отдельный компонент <createTaskForm />
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapperForm}>
      <div className={styles.task}>
        <div className={styles.title}>
          <h3>
            <Input
              type="text"
              value={nameTask}
              onChange={formHandlers.onNameTaskChange}
            />
          </h3>
        </div>
        <div className={styles.description}>
          <Input
            type="text"
            value={infoTask}
            onChange={formHandlers.onInfoTaskChange}
          />
        </div>
        <div className={styles.tags}>
          <Tags isImportant={importantStatus} isCompleted={completedStatus} />
          <div>
            <Checkbox
              checked={importantStatus}
              onChange={formHandlers.onImportantStatusChange}
            />
            <Checkbox
              checked={completedStatus}
              onChange={formHandlers.onCompletedStatusChange}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <div>
            <Button type="submit" className={styles.buttonSubmit}>
              Редактировать задачу
            </Button>
          </div>
          <div>
            <DeleteTask deleteTaskId={id} />
          </div>
        </div>
      </div>
    </form>
  )
}
