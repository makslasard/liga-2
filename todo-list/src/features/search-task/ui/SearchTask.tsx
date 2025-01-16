import React, { ChangeEvent } from 'react'

import { useForm } from 'react-hook-form'
import { TextField, Typography } from '@mui/material'
import { fetchTasksBySearchQuery } from '../api/fetchTasksBySearchQuery'

import styles from './SearchTask.module.scss'
import { useTypedDispatch } from '@/app/store/types/typedHooks'

export const SearchTask: React.FC = () => {
  const { setValue } = useForm<{ searchQuery: string }>({
    defaultValues: { searchQuery: '' },
    mode: 'onChange',
  })
  const dispatch = useTypedDispatch()

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target

    setValue('searchQuery', value)
    // Оптимизация поиска useDebounce
    dispatch(fetchTasksBySearchQuery(value))
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
