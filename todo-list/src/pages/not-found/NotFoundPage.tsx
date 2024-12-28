import React from 'react';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Страница не найдена!</h2>
    </div>
  );
};
