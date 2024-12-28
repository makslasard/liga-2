import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from '../types/types';
import { IFiltersState } from './filtersTasksSlice.types';

const initialState: IFiltersState = {
  currentFilter: { nameFilter: 'All', keyFilter: 'All' },
  filtersList: [
    { nameFilter: 'All', keyFilter: 'All' },
    { nameFilter: 'Done', keyFilter: 'Done' },
    { nameFilter: 'isImportant', keyFilter: 'isImportant' },
  ],
};

export const filtersTasksSlice = createSlice({
  name: 'filtersTasks',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<FilterType>) => {
      state.currentFilter = action.payload;
    },
  },
});

export const { reducer: filtersTasksReducer, actions: filtersTasksActions } = filtersTasksSlice;
