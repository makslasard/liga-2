import React, { ChangeEvent } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/redux';
import { getTaskBySearchQuery } from '../../api/allTasksApi/allTasksApi';
import { ChangeMeType } from '../../types/commonTypes';
import styles from './SearchInput.module.scss';
import { SearchInputForm } from 'modules/SearchInput/SearchInput.types';

const defaultValues: SearchInputForm = {
  searchQuery: '',
};

export const SearchInput: React.FC = () => {
  const { handleSubmit, reset, control, setValue } = useForm<SearchInputForm>({
    defaultValues: defaultValues,
  });
  const dispatch = useAppDispatch();

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue('searchQuery', evt.target.value);
    dispatch<ChangeMeType>(getTaskBySearchQuery(evt.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Найти задачу:</h2>
      <div className="form-group">
        <Controller
          control={control}
          name="searchQuery"
          render={({ field, fieldState: { error } }) => (
            <div>
              <input
                value={field.value}
                onChange={onNameChange}
                type="search"
                placeholder="Поиск..."
                className={`form-control ${error?.message ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{error?.message}</div>
            </div>
          )}
        />
      </div>
    </div>
  );
};
