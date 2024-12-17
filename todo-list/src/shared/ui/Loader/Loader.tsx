import React from 'react';

import styles from './Loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Идет загрузка...</h3>
    </div>
  );
};
