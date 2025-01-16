// Добавление новой задачи
import axios from 'axios'
import { Constants } from '@/shared/api/constants/constant'
import { ITask } from '@/shared/types/task/task'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAddNewTask = createAsyncThunk(
  'task/addNewTask',
  async (newTask: ITask, thunkAPI) => {
    const url = Constants.BASE_URL_TASKS
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const response = await axios.post(url, newTask)

      dispatch(allTasksActions.addTask({ newTask: response.data }))
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
