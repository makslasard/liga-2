import { createAsyncThunk } from '@reduxjs/toolkit'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { ITask } from '@/shared/types/task/task'
import { EndpontsFirebase } from '@/shared/api/constants/constant'

// RTK Query?
export const fetchAllTask = createAsyncThunk(
  'task/fetchAllTask',
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const querySnapshot = await getDocs(
        collection(db, EndpontsFirebase.COLLECTION_TASKS)
      )
      const tasks: ITask[] = querySnapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          id: data.id,
          nameTask: data.nameTask,
          infoTask: data.infoTask,
          editStatus: data.editStatus,
          importantStatus: data.importantStatus,
          completedStatus: data.completedStatus,
        }
      })
      dispatch(allTasksActions.setTasks({ allTasks: tasks }))
    } catch (e) {
      dispatch(
        allTasksActions.setErrorMessage({
          message: `Произошла ошибка! - ${e.message}`,
        })
      )
      return rejectWithValue(e)
    } finally {
      dispatch(allTasksActions.changeIsLoading({ isLoading: false }))
    }
  }
)
