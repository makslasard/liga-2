import React from 'react';

import styles from './SelectFilter.module.scss';

export const SelectFilter: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Фильтр задач:</h2>
      <select name="select" id="1" className={styles.select}>
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Done">Done</option>
        <option value="Important">Important</option>
      </select>
    </div>
  );
};
