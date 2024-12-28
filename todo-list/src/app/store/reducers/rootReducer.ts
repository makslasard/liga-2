import { combineReducers } from 'redux';
import { editTaskReducer } from '../../../features/task/edit-task/model/edit-task.slice';
import { filtersTasksReducer } from '../../../features/select/select-filter/model/filtersTasksSlice';
import { allTasksReducer } from '../../../features/task/task-list/model/allTasksSlice';
import { searchTasksReducer } from '../../../features/input/search-task/model/search-task.slice';

export const rootReducer = combineReducers({
  allTasks: allTasksReducer,
  filtersTasks: filtersTasksReducer,
  searchTasks: searchTasksReducer,
  currentTaskById: editTaskReducer,
});
