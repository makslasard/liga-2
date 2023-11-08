import { combineReducers } from 'redux';
import { allTasksReducer } from './allTasks/allTasksSlice';
import { filtersTasksReducer } from './filtersTasks/filtersTasksSlice';
import { searchTasksReducer } from './searchTasks/searchTasksSlice';

export const rootReducer = combineReducers({
  allTasks: allTasksReducer,
  filtersTasks: filtersTasksReducer,
  searchTasks: searchTasksReducer,
});
