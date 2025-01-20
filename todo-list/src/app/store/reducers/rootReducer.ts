import { combineReducers } from 'redux'
import { allTasksReducer } from '@/widgets/task-list/model/allTasksSlice'
import { filtersTasksReducer } from '@/features/select-filter/model/slices/filtersTasksSlice'
import { searchTasksReducer } from '@/features/search-task/model/search-task.slice'
import { editTaskReducer } from '@/features/edit-task/model/edit-task.slice'

export const rootReducer = combineReducers({
  allTasks: allTasksReducer,
  filtersTasks: filtersTasksReducer,
  searchTasks: searchTasksReducer,
  currentTaskById: editTaskReducer,
  // [formApi.reducerPath]: formApi.reducer,
})
