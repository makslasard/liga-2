import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchState, searchQueryType } from './types';

const initialState: ISearchState = {
  searchQuery: '',
};

export const searchTasksSlice = createSlice({
  name: 'searchTasks',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<searchQueryType>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  reducer: searchTasksReducer,
  actions: { setSearchQuery },
} = searchTasksSlice;
