// Фильтрация задача по текущему фильтру
import axios from 'axios'
import { Constants } from '@/shared/api/constants/constant'
import { FilterType } from '@/features/select-filter/model/types/types'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ITask } from '@/shared/types/task/task'

export const fetchTasksByFilter = createAsyncThunk(
  'task/filterTask',
  async (filter: FilterType, thunkAPI) => {
    const url = Constants.BASE_URL_TASKS
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      if (filter.keyFilter === 'Important') {
        const response = await axios.get<ITask[]>(url, {
          params: {
            importantStatus: true,
          },
        })
        dispatch(allTasksActions.setTasks({ allTasks: response.data }))
      }
      if (filter.keyFilter === 'Done') {
        const response = await axios.get<ITask[]>(url, {
          params: {
            completedStatus: true,
          },
        })
        dispatch(allTasksActions.setTasks({ allTasks: response.data }))
      }
      if (filter.keyFilter === 'All') {
        const response = await axios.get<ITask[]>(url)
        dispatch(allTasksActions.setTasks({ allTasks: response.data }))
      }
    } catch (e) {
      dispatch(
        allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` })
      )
      return rejectWithValue(e)
    } finally {
      dispatch(allTasksActions.changeIsLoading({ isLoading: false }))
    }
  }
)
