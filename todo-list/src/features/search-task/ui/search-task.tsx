import React, { ChangeEvent } from 'react'

import { useForm } from 'react-hook-form'
import { TextField, Typography } from '@mui/material'
import { SearchInputForm } from '../types/types'
import { getTaskBySearchQuery } from '../api/getTaskBySearchQuery'

import styles from './search-task.module.scss'

export const SearchTask: React.FC = () => {
  const { setValue } = useForm<SearchInputForm>({
    defaultValues: { searchQuery: '' },
    mode: 'onChange',
  })

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target

    setValue('searchQuery', value)
    // Оптимизация поиска useDebounce
    getTaskBySearchQuery(value)
  }

  return (
    <div className={styles.container_search}>
      <Typography variant="h4">Найти задачу:</Typography>
      <div className={styles.search_field}>
        <TextField
          fullWidth
          name="searchQuery"
          type="search"
          onChange={onNameChange}
          placeholder="Поиск..."
        />
      </div>
    </div>
  )
}
