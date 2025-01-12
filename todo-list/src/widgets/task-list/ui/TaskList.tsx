import React, { useEffect } from 'react'
import {
  useTypedDispatch,
  useTypedSelector,
} from '@/app/store/types/typedHooks'
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Tags } from '@/shared/ui/Tags/Tags'

import styles from './TaskList.module.scss'
import { fetchAllTask } from '@/widgets/task-list/api/fetchAllTask'
import { ITask } from '@/shared/types/task/task'

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
          <div key={task.id} className={styles.task}>
            <Card variant="outlined">
              <CardHeader
                title={
                  <Typography gutterBottom variant="h5" component="div">
                    {task.nameTask}
                  </Typography>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
              ></CardHeader>
              <CardContent>
                <Typography variant="h6">{task.infoTask}</Typography>
                <Tags
                  isImportant={task.importantStatus}
                  isCompleted={task.importantStatus}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
