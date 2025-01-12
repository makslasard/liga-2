import React from 'react'

import { MenuItem, Select, Typography } from '@mui/material'
import { getTasksByFilters } from '../model/api/getTasksByFilter'
import { filtersTasksActions } from '../model/slices/filtersTasksSlice'
import styles from './SelectFilters.module.scss'
import {
  useTypedDispatch,
  useTypedSelector,
} from '@/app/store/types/typedHooks'
import { FilterType } from '@/features/select-filter/model/types/types'

export const SelectFilters: React.FC = () => {
  const filtersList = useTypedSelector(
    (state) => state.filtersTasks.filtersList
  )
  const dispatch = useTypedDispatch()

  const changeFilter = (filter: FilterType) => {
    dispatch(filtersTasksActions.changeFilter(filter))
    getTasksByFilters(filter)
  }

  return (
    <div className={styles.wrapperSelectFilters}>
      <Typography variant="h4">Фильтр задач:</Typography>
      <Select name="select" className={styles.selectFilter} variant="outlined">
        {filtersList?.map((filter: FilterType, indexFilter: number) => (
          <MenuItem
            key={indexFilter}
            value={filter.nameFilter}
            onChange={() => changeFilter(filter)}
          >
            {filter.nameFilter}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
