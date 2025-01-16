import axios from 'axios'
import { Constants } from '@/shared/api/constants/constant'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'
import { ITask } from '@/shared/types/task/task'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTasksBySearchQuery = createAsyncThunk(
  'task/searchTask',
  async (searchQuery: string, thunkAPI) => {
    const url = Constants.BASE_URL_TASKS
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const response = await axios.get<ITask[]>(url, {
        params: {
          nameTask: searchQuery,
        },
      })

      dispatch(allTasksActions.setTasks({ allTasks: response.data }))
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
