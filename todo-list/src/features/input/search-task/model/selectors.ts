import { createSelector } from '@reduxjs/toolkit';
import { ISearchState } from './types';
import { RootState } from 'app/store/store';

const selectSearchState = (state: RootState): ISearchState => state.searchTasks;

export const selectSearchQuery = createSelector(selectSearchState, (state: ISearchState) => state.searchQuery);
