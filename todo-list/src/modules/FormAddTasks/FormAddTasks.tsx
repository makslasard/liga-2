import React from 'react';

import styles from './FormAddTasks.module.scss';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

export const FormAddTasks: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Создать задачу:</h2>
      <div className={styles.form}>
        <div className={styles.newTask}>
          <Input placeholder="Название задачи" />
        </div>
        <div className={styles.descriptionTask}>
          <Input placeholder="Описание задачи" />
        </div>
        <div className={styles.button}>
          <Button>Создать задачу</Button>
        </div>
      </div>
    </div>
  );
};
