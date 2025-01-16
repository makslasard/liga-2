import React from 'react'

import { MenuItem, Select, Typography } from '@mui/material'
import { fetchTasksByFilter } from '../model/api/fetchTasksByFilter'
import { filtersTasksActions } from '../model/slices/filtersTasksSlice'
import styles from './SelectFilters.module.scss'
import {
  useTypedDispatch,
  useTypedSelector,
} from '@/app/store/types/typedHooks'
import { FilterType } from '@/features/select-filter/model/types/types'
import {
  selectorFiltersCurrentFilter,
  selectorFiltersTaskList,
} from '@/features/select-filter/model/selectors/filterTaskListSelector'

export const SelectFilters: React.FC = () => {
  const filtersList = useTypedSelector(selectorFiltersTaskList)
  const currentFilter = useTypedSelector(selectorFiltersCurrentFilter)
  const dispatch = useTypedDispatch()

  const changeFilter = (filter: FilterType) => {
    dispatch(filtersTasksActions.changeFilter(filter))
    dispatch(fetchTasksByFilter(filter))

    console.log(filter)
  }

  console.log(currentFilter)

  return (
    <div className={styles.wrapperSelectFilters}>
      <Typography variant="h4">Фильтр задач:</Typography>
      <Select
        name="select"
        className={styles.selectFilter}
        variant="outlined"
        value={currentFilter.nameFilter}
      >
        {filtersList?.map((filter: FilterType, indexFilter: number) => (
          <MenuItem
            key={indexFilter}
            value={filter.nameFilter}
            onClick={() => changeFilter(filter)}
          >
            {filter.nameFilter}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
