import React from 'react';

import styles from './Input.module.scss';

export const Input: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return <input type="text" className={styles.input} placeholder={placeholder} />;
};
