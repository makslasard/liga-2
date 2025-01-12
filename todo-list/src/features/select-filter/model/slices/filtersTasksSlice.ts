import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterType } from '@/features/select-filter/model/types/types'

export interface IFiltersState {
  currentFilter: FilterType
  filtersList: FilterType[]
}

const initialState: IFiltersState = {
  currentFilter: { nameFilter: 'All', keyFilter: 'All' },
  filtersList: [
    { nameFilter: 'All', keyFilter: 'All' },
    { nameFilter: 'Done', keyFilter: 'Done' },
    { nameFilter: 'Important', keyFilter: 'Important' },
  ],
}

export const filtersTasksSlice = createSlice({
  name: 'filtersTasks',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<FilterType>) => {
      state.currentFilter = action.payload
    },
  },
})

export const { reducer: filtersTasksReducer, actions: filtersTasksActions } =
  filtersTasksSlice
