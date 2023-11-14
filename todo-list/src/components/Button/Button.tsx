import React from 'react';

import styles from './Button.module.scss';

export const Button: React.FC<{ children: React.ReactNode; onClick?: () => void; disabled?: boolean }> = ({
  children,
  onClick,
}) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
