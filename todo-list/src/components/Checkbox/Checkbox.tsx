import React, { useState } from 'react';

import styles from './Checkbox.module.scss';

export const Checkbox: React.FC<{
  onChange?: (isChecked: boolean) => void;
  className?: string;
  isChecked?: boolean;
}> = ({ onChange, className }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.wrapper} role="checkbox" aria-label="Важная задача">
      <div>
        <input
          type="checkbox"
          className={className}
          checked={isChecked}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setIsChecked(event.target.checked);
            if (onChange) {
              onChange(event.target.checked);
            }
          }}
        />
      </div>
    </div>
  );
};
