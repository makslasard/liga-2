import React, { ChangeEvent, useState } from 'react';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  onChange?: (evt?: ChangeEvent<HTMLInputElement>, isChecked?: boolean) => void | boolean;
  className?: string;
  checked?: boolean;
  ariaLabel: string;
  role: string;
  type: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ onChange, type, role, className, checked, ariaLabel }) => {
  const [isCheckedState, setIsChecked] = useState(checked);

  const handleOnChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className={styles.wrapper} role={role} aria-label={ariaLabel}>
      <div>
        <input
          type={type}
          className={className}
          checked={isCheckedState}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnChange(event.target.checked)}
        />
      </div>
    </div>
  );
};
