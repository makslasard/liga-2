// Удаление задачи по id
import { EndpontsFirebase } from '@/shared/api/constants/constant'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'

export const fetchDeleteTaskById = createAsyncThunk(
  'task/deleteTaskById',
  async (taskId: string, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const querySnapshot = await deleteDoc(
        doc(db, EndpontsFirebase.COLLECTION_TASKS, taskId)
      )

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
