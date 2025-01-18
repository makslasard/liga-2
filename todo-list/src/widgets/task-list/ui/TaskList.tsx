import React, { useEffect } from 'react'
import {
  useTypedDispatch,
  useTypedSelector,
} from '@/app/store/types/typedHooks'
import { Typography } from '@mui/material'

import styles from './TaskList.module.scss'
import { fetchAllTask } from '@/widgets/task-list/api/fetchAllTask'
import { ITask } from '@/shared/types/task/task'
import { TaskCard } from '@/widgets/task-card/ui/TaskCard'

export const TaskList: React.FC = () => {
  const allTasks = useTypedSelector((state) => state.allTasks.allTasks)
  // const isLoading = useTypedSelector((state) => state.allTasks.isLoading);
  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(fetchAllTask())
  }, [])

  return (
    <div className={styles.container_list}>
      <Typography variant="h4">Список задач:</Typography>
      <div className={styles.tasks_list}>
        {allTasks.map((task: ITask) => (
          <TaskCard key={task.id} optionTask={task} />
        ))}
      </div>
    </div>
  )
}
