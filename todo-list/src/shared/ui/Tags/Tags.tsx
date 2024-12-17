import React from 'react';
import { Important } from './Important/Important';

import styles from './Tags.module.scss';
import { Done } from './Done/Done';

interface TagProps {
  isImportant?: boolean;
  isCompleted?: boolean;
  isAll?: boolean; // Добавлено поле isAll
}

export const Tags: React.FC<TagProps> = ({ isImportant, isCompleted, isAll }) => {
  return (
    <div className={styles.wrapper}>
      {isImportant && <Important />}
      {isCompleted && <Done />}
      {isAll && (
        <>
          <Important />
          <Done />
        </>
      )}
    </div>
  );
};
