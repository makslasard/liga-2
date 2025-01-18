import React from 'react'
import { Button } from '@mui/material'
import { fetchDeleteTaskById } from '../api/fetchDeleteTaskById'

import styles from './DeleteTask.module.scss'
import { useTypedDispatch } from '@/app/store/types/typedHooks'
import { Delete } from '@mui/icons-material'

export const DeleteTask: React.FC<{ deleteTaskId: string }> = ({
  deleteTaskId,
}) => {
  const dispatch = useTypedDispatch()

  const deleteTask = (deleteTaskId: string) => {
    dispatch(fetchDeleteTaskById(deleteTaskId))
  }

  return (
    <div className={styles.wrapperButtonDelete}>
      <Button onClick={() => deleteTask(deleteTaskId)}>
        <Delete />
      </Button>
    </div>
  )
}
