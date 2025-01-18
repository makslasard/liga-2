import { createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/firebase'
import { FilterType } from '@/features/select-filter/model/types/types'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'
import { ITask } from '@/shared/types/task/task'
import { EndpontsFirebase } from '@/shared/api/constants/constant'

export const fetchTasksByFilter = createAsyncThunk(
  'task/filterTask',
  async (filter: FilterType, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      if (filter.keyFilter === 'Important') {
        const collectionRef = collection(db, EndpontsFirebase.COLLECTION_TASKS)
        const q = query(collectionRef, where('importantStatus', '==', true))
        const taskList = await getDocs(q)
        const tasks: ITask[] = taskList.docs.map((doc) => {
          const data = doc.data()
          return { id: doc.id, ...data } as ITask
        })
        dispatch(allTasksActions.setTasks({ allTasks: tasks }))
      }
      if (filter.keyFilter === 'Done') {
        const collectionRef = collection(db, EndpontsFirebase.COLLECTION_TASKS)
        const q = query(collectionRef, where('completedStatus', '==', true))
        const taskList = await getDocs(q)
        const tasks: ITask[] = taskList.docs.map((doc) => {
          const data = doc.data()
          return { id: doc.id, ...data } as ITask
        })
        dispatch(allTasksActions.setTasks({ allTasks: tasks }))
      }
      if (filter.keyFilter === 'All') {
        const collectionRef = collection(db, EndpontsFirebase.COLLECTION_TASKS)
        const taskList = await getDocs(collectionRef)
        const tasks: ITask[] = taskList.docs.map((doc) => {
          const data = doc.data()
          return { id: doc.id, ...data } as ITask
        })
        dispatch(allTasksActions.setTasks({ allTasks: tasks }))
      }
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
