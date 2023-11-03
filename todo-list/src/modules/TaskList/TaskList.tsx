import React, { useState } from 'react';

import { ITask } from '../../types/Task/Task.types';
import styles from './TaskList.module.scss';
import { Task } from 'modules/TaskList/Task/Task';

export const TaskList: React.FC = () => {
  const [quantityTasks, setQuantityTasks] = useState<number>(1);
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: 'Задача 1', description: 'Описание задачи 1', isCompleted: true, isImportant: false },
    { id: 2, title: 'Задача 2', description: 'Описание задачи 2', isCompleted: true, isImportant: false },
    { id: 3, title: 'Задача 3', description: 'Описание задачи 3', isCompleted: true, isImportant: false },
    { id: 4, title: 'Задача 4', description: 'Описание задачи 4', isCompleted: true, isImportant: false },
  ]);

  return (
    <div className={styles.wrapper}>
      <h2>Список задач:</h2>
      <div className={styles.tasks}>
        {quantityTasks === 0 ? (
          <div>
            {quantityTasks === 0 && (
              <div>
                <h3>Список задач пуст!</h3>
              </div>
            )}
          </div>
        ) : (
          <div>
            {tasks.map((item) => (
              <Task key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
