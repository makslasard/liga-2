import { RootState } from '@/app/store/store'
import { IFiltersState } from '@/features/select-filter/model/slices/filtersTasksSlice'
import { createSelector } from '@reduxjs/toolkit'

const selectFiltersTaskState = (state: RootState): IFiltersState =>
  state.filtersTasks

export const selectorFiltersTaskList = createSelector(
  selectFiltersTaskState,
  (state: IFiltersState) => state.filtersList
)

export const selectorFiltersCurrentFilter = createSelector(
  selectFiltersTaskState,
  (state: IFiltersState) => state.currentFilter
)
