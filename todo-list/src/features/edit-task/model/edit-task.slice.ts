import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEditTaskState } from './types'
import { ITask } from '@/shared/types/task/task'

const initialState: IEditTaskState = {
  currentTaskById: null,
  isLoading: false,
  errorMessage: null,
}

export const editTasksSlice = createSlice({
  name: 'editTask',
  initialState,
  reducers: {
    setCurrentTaskById: (state, action: PayloadAction<ITask>) => {
      state.currentTaskById = action.payload
    },
    setErrorMessage: (state, action: PayloadAction<{ message: string }>) => {
      state.errorMessage = action.payload.message
    },

    changeIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
  },
})

export const { reducer: editTaskReducer, actions: editTaskActions } =
  editTasksSlice
