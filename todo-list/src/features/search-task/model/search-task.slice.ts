import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISearchState } from './types'

const initialState: ISearchState = {
  searchQuery: '',
}

export const searchTasksSlice = createSlice({
  name: 'searchTasks',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<{ searchQuery: string }>) => {
      state.searchQuery = action.payload.searchQuery
    },
  },
})

export const { reducer: searchTasksReducer, actions: searchTasksActions } =
  searchTasksSlice
