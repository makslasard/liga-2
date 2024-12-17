import React, { ChangeEvent } from 'react';

import { useForm } from 'react-hook-form';
import { SearchInputForm } from '../types/types';
import { getTaskBySearchQuery } from '../api/getTaskBySearchQuery';
import FormField from '../../../../shared/ui/FormFields/FormFields';
import styles from './search-task.module.scss';

export const SearchTask: React.FC = () => {
  const { control, setValue } = useForm<SearchInputForm>({
    defaultValues: { searchQuery: '' },
    mode: 'onChange',
  });

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    setValue('searchQuery', value);
    // Оптимизация поиска useDebounce
    getTaskBySearchQuery(value);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Найти задачу:</h2>
      <div className="form-group">
        <FormField
          control={control}
          name={'searchQuery'}
          type={'search'}
          onChange={onNameChange}
          placeholder={'Поиск...'}
          baseClass={'form-control'}
        />
      </div>
    </div>
  );
};
