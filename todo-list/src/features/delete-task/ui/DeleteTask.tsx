import React from 'react'
import { Button } from '@mui/material'
import { fetchDeleteTaskById } from '../api/fetchDeleteTaskById'

import styles from './DeleteTask.module.scss'
import { useTypedDispatch } from '@/app/store/types/typedHooks'

export const DeleteTask: React.FC<{ deleteTaskId: number }> = ({
  deleteTaskId,
}) => {
  const dispatch = useTypedDispatch()

  const deleteTask = (deleteTaskId: number) => {
    dispatch(fetchDeleteTaskById(deleteTaskId))
  }

  return (
    <div className={styles.wrapperButtonDelete}>
      <Button onClick={() => deleteTask(deleteTaskId)}>Удалить задачу</Button>
    </div>
  )
}
