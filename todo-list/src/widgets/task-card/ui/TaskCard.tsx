import styles from '@/widgets/task-list/ui/TaskList.module.scss'
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Tags } from '@/shared/ui/Tags/Tags'
import React from 'react'
import { ITask } from '@/shared/types/task/task'
import { DeleteTask } from '@/features/delete-task'

export const TaskCard = ({ optionTask }: { optionTask: ITask }) => {
  const { id, nameTask, infoTask, importantStatus, completedStatus } =
    optionTask

  return (
    <div className={styles.task}>
      <Card variant="outlined">
        <CardHeader
          title={
            <Typography gutterBottom variant="h5" component="div">
              {nameTask}
            </Typography>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        ></CardHeader>
        <CardContent>
          <Typography variant="h6">{infoTask}</Typography>
          <Tags isImportant={importantStatus} isCompleted={completedStatus} />
          <DeleteTask deleteTaskId={id} />
        </CardContent>
      </Card>
    </div>
  )
}
