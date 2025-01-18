import { createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '@/firebase'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'
import { ITask } from '@/shared/types/task/task'
import { EndpontsFirebase } from '@/shared/api/constants/constant'

export const fetchTasksBySearchQuery = createAsyncThunk(
  'task/searchTask',
  async (searchQuery: string, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const tasksCollection = collection(db, EndpontsFirebase.COLLECTION_TASKS)
      const q = query(
        tasksCollection,
        where('nameTask', '>=', searchQuery),
        where('nameTask', '<=', searchQuery + '\uf8ff'),
        orderBy('nameTask')
      )
      const querySnapshot = await getDocs(q)
      const tasks: ITask[] = querySnapshot.docs.map((doc) => {
        const data = doc.data()
        return { id: doc.id, ...data } as ITask
      })

      dispatch(allTasksActions.setTasks({ allTasks: tasks }))
    } catch (e: any) {
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
