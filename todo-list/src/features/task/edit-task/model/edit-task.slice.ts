import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEditTask } from '../types/types';
import { IEditTaskState } from './types';

const initialState: IEditTaskState = {
  currentTaskById: null,
  isLoading: false,
  errorMessage: null,
};

export const editTasksSlice = createSlice({
  name: 'editTask',
  initialState,
  reducers: {
    setCurrentTaskById: (state, action: PayloadAction<IEditTask>) => {
      state.currentTaskById = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<{ message: string }>) => {
      state.errorMessage = action.payload.message;
    },

    changeIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { reducer: editTaskReducer, actions: editTaskActions } = editTasksSlice;
