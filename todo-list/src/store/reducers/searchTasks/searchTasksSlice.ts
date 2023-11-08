import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchState } from './searchTasksSlice.types';

const initialState: ISearchState = {
  searchQuery: '',
};

export const searchTasksSlice = createSlice({
  name: 'searchTasks',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { reducer: searchTasksReducer, actions: searchTasksActions } = searchTasksSlice;
