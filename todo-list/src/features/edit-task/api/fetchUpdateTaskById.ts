// Обновление задачи по id
import axios from 'axios'
import { editTaskActions } from '../model/edit-task.slice'
import { Constants } from '@/shared/api/constants/constant'
import { ITask } from '@/shared/types/task/task'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'

export const fetchUpdateTaskById = createAsyncThunk(
  'task/updateTaskById',
  async (task: ITask, thunkAPI) => {
    const url = `${Constants.BASE_URL_TASKS}/${task.id}`
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const response = await axios.patch<ITask>(url, task)

      dispatch(
        editTaskActions.setCurrentTaskById({ currentTaskById: response.data })
      )
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
