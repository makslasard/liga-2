import React, { useState } from 'react';

import styles from './Input.module.scss';

export const Input: React.FC<{
  placeholder?: string;
  type: string;
  value?: string;
  className?: string;
  onClear?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder, onChange, value = '', onClear, type }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleClearClick = () => {
    setInputValue('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        value={inputValue}
        className={styles.input}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {inputValue && (
        <button type="button" className={styles.buttonDelete} onClick={handleClearClick}>
          <span>&times;</span>
        </button>
      )}
    </div>
  );
};
