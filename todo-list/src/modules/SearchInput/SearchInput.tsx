import React from 'react';

import styles from './SearchInput.module.scss';
import { Input } from 'components/Input/Input';

export const SearchInput: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Найти задачу:</h2>
      <Input placeholder="Поиск..." />
    </div>
  );
};
