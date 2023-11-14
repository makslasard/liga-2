import React from 'react';

import styles from './Done.module.scss';

export const Done: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <span>Completed</span>
    </div>
  );
};
