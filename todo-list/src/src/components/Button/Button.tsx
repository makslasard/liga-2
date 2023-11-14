import React from 'react';

import styles from './Button.module.scss';

export const Button: React.FC<{
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ children, onClick, type, disabled }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
