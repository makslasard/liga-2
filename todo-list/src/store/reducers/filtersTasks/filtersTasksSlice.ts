import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFiltersState } from './filtersTasksSlice.types';

const initialState: IFiltersState = {
  currentFilter: 'All',
  filtersTask: [
    { id: 1, name: 'All', filter: 'All' },
    { id: 2, name: 'Active', filter: 'Active' },
    { id: 3, name: 'Done', filter: 'Done' },
    { id: 4, name: 'Important', filter: 'Important' },
  ],
};

export const filtersTasksSlice = createSlice({
  name: 'filtersTasks',
  initialState,
  reducers: {
    setCurrentFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload;
    },
  },
});

export const { reducer: filtersTasksReducer, actions: filtersTasksActions } = filtersTasksSlice;
