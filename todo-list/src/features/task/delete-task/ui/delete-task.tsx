import React from 'react';
import { Button } from '@mui/material';
import { deleteTaskById } from '../api/deleteTaskById';
import styles from './delete-task.module.scss';

export const DeleteTask: React.FC<{ deleteTaskId: number }> = ({ deleteTaskId }) => {
  const deleteTask = (deleteTaskId: number) => {
    deleteTaskById(deleteTaskId);
  };

  return (
    <div className={styles.wrapperButtonDelete}>
      <Button onClick={() => deleteTask(deleteTaskId)}>Удалить задачу</Button>
    </div>
  );
};
