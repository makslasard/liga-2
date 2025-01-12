import { createAsyncThunk } from '@reduxjs/toolkit'
import { Constants } from '@/shared/api/constants/constant'
import axios from 'axios'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'
import { ITask } from '@/shared/types/task/task'

// RTK Query?
export const fetchAllTask = createAsyncThunk(
  'task/fetchAllTask',
  async (_, thunkAPI) => {
    const url = Constants.BASE_URL_TASKS
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const response = await axios.get<ITask[]>(url)

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
