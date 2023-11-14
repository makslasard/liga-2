import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFiltersState } from './filtersTasksSlice.types';

const initialState: IFiltersState = {
  currentFilter: 'All',
  filtersTask: [
    { id: 1, name: 'All', filter: 'All' },
    { id: 3, name: 'Done', filter: 'Done' },
    { id: 4, name: 'Important', filter: 'Important' },
  ],
};

export const filtersTasksSlice = createSlice({
  name: 'filtersTasks',
  initialState,
  reducers: {
    setCurrentFilter: (state, action: PayloadAction<{ filter: string }>) => {
      state.currentFilter = action.payload.filter;
    },
  },
});

export const { reducer: filtersTasksReducer, actions: filtersTasksActions } = filtersTasksSlice;
