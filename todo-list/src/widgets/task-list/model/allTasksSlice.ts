import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAllTaskState } from './allTasksSlice.types'
import { ITask } from '@/shared/types/task/task'

const initialState: IAllTaskState = {
  allTasks: [],
  isLoading: false,
  errorMessage: '',
  totalCountTasks: 0,
}

export const allTasksSlice = createSlice({
  name: 'allTasks',
  initialState,
  reducers: {
    setPaginationTasks: (
      state,
      action: PayloadAction<{
        currentPage: number
        tasksPerPage: number
      }>
    ) => {
      const { currentPage, tasksPerPage } = action.payload
      const startIndex = (currentPage - 1) * tasksPerPage
      const endIndex = Math.min(
        currentPage * tasksPerPage,
        state.allTasks.length
      )

      state.allTasks = state.allTasks.slice(startIndex, endIndex)
    },

    setErrorMessage: (state, action: PayloadAction<{ message: string }>) => {
      state.errorMessage = action.payload.message
    },

    changeIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },

    setTasks: (state, action: PayloadAction<{ allTasks: ITask[] }>) => {
      state.allTasks = action.payload.allTasks
    },

    addTask: (state, action: PayloadAction<{ newTask: ITask }>) => {
      state.allTasks.unshift(action.payload.newTask)
    },

    setTotalCount: (state, action: PayloadAction<{ totalCount: number }>) => {
      state.totalCountTasks = action.payload.totalCount
    },

    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.allTasks = state.allTasks.filter(
        (task) => task.id !== action.payload.id
      )
      return state
    },
  },
})

export const { reducer: allTasksReducer, actions: allTasksActions } =
  allTasksSlice
