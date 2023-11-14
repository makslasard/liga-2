import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../../types/Task/Task.types';
import { IAllTaskState } from './allTasksSlice.types';

const initialState: IAllTaskState = {
  currentTaskById: null,
  allTasks: [],
  isLoading: false,
  errorMessage: '',
};

export const allTasksSlice = createSlice({
  name: 'allTasks',
  initialState,
  reducers: {
    setPaginationTasks: (state, action: PayloadAction<{ currentPage: number; tasksPerPage: number }>) => {
      const { currentPage, tasksPerPage } = action.payload;
      const startIndex = (currentPage - 1) * tasksPerPage;
      const endIndex = Math.min(currentPage * tasksPerPage, state.allTasks.length);

      state.allTasks = state.allTasks.slice(startIndex, endIndex);
    },

    setTaskById: (state, action: PayloadAction<{ taskById: ITask[] }>) => {
      state.currentTaskById = action.payload.taskById;
    },

    setErrorMessage: (state, action: PayloadAction<{ message: string }>) => {
      state.errorMessage = action.payload.message;
    },

    changeIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },

    setTasks: (state, action: PayloadAction<{ allTasks: ITask[] }>) => {
      state.allTasks = action.payload.allTasks;
    },

    addTask: (state, action: PayloadAction<{ newTask: Omit<ITask, 'id'> }>) => {
      state.allTasks.unshift(action.payload.newTask);
    },

    deleteTask: (state, action: PayloadAction<{ id: number | undefined }>) => {
      const taskIndex = state.allTasks.findIndex((item) => item.id === action.payload.id);
      if (taskIndex !== -1) {
        state.allTasks.splice(taskIndex, 1);
      }
      return state;
    },

    updateTask: (state, action: PayloadAction<{ updateTask: ITask }>) => {
      const taskIndex = state.allTasks.findIndex((item) => item.id === action.payload.updateTask.id);
      if (taskIndex !== -1) {
        state.allTasks[taskIndex] = action.payload.updateTask;
      }
      return state;
    },
  },
});

export const { reducer: allTasksReducer, actions: allTasksActions } = allTasksSlice;
