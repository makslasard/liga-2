// Удаление задачи по id
import axios from 'axios'
import { Constants } from '@/shared/api/constants/constant'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchDeleteTaskById = createAsyncThunk(
  'task/deleteTaskById',
  async (taskId: number | string, thunkAPI) => {
    const url = `${Constants.BASE_URL_TASKS}/${taskId}`
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      await axios.delete(url)

      dispatch(allTasksActions.deleteTask({ id: taskId }))
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
