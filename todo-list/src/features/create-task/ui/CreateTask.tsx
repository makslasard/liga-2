import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material'
import { setNewTask } from '../model/api/setNewTask'
import { createFormHandlers } from '@/pages/edit-task/lib/formHandlers'
import { TaskFieldNames } from '@/pages/edit-task/types/TaskPage.types'

import styles from './CreateTask.module.scss'
import { useTypedDispatch } from '@/app/store/types/typedHooks'
import { yupResolver } from '@hookform/resolvers/yup'
import { ITask } from '@/shared/types/task/task'
import { defaultValueTaskForm } from '@/widgets/form/model/types/form'
import { validationFormAddTask } from '@/features/create-task/lib/validationFormAddTask'

export const CreateTask: React.FC = () => {
  const { handleSubmit, reset, setValue } = useForm<ITask>({
    defaultValues: defaultValueTaskForm,
    mode: 'onChange',
    // @ts-ignore
    resolver: yupResolver(validationFormAddTask),
  })
  const dispatch = useTypedDispatch()

  const onSubmit = (data: ITask) => {
    dispatch(setNewTask(data))

    reset()
  }

  const formHandlers = createFormHandlers(setValue)

  return (
    <div className={styles.container_form}>
      <Typography variant="h4">Создать задачу:</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.group_fields}>
          <TextField
            name={TaskFieldNames.Name}
            type="text"
            onChange={formHandlers.onNameTaskChange}
            placeholder="Название задачи"
            className={styles.field_name}
            variant="outlined"
          />
          <TextField
            name={TaskFieldNames.Info}
            type="text"
            onChange={formHandlers.onInfoTaskChange}
            placeholder="Описание задачи"
            className={styles.field_info}
            variant="outlined"
          />
        </div>

        <div className={styles.checkboxes_group}>
          <FormControl>
            <div className={styles.checkbox_controls}>
              <div className={styles.checkbox_important}>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      name={TaskFieldNames.IsImportant}
                      onChange={formHandlers.onImportantStatusChange}
                    />
                  }
                  label="Важная задача"
                />
              </div>
              <div className={styles.checkbox_completed}>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      name={TaskFieldNames.IsCompleted}
                      onChange={formHandlers.onCompletedStatusChange}
                    />
                  }
                  label="Выполненная задача"
                />
              </div>
            </div>
          </FormControl>
        </div>

        <div className={styles.buttons_group}>
          <Button
            className={styles.button_submit}
            variant="contained"
            color="success"
            type="submit"
          >
            Сохранить
          </Button>
          <Button
            className={styles.button_reset}
            variant="outlined"
            color="error"
            type="reset"
            onClick={() => reset()}
          >
            Очистить форму
          </Button>
        </div>
      </form>
    </div>
  )
}
