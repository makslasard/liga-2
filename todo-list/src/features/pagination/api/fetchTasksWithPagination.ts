import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  collection,
  DocumentData,
  getDocs,
  limit,
  query,
  startAfter,
} from 'firebase/firestore'
import { db } from '@/firebase'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'
import { ITask } from '@/shared/types/task/task'
import { EndpontsFirebase } from '@/shared/api/constants/constant'

interface FetchTasksWithPaginationProps {
  page: number
  pageSize: number
}

export const fetchTasksWithPagination = createAsyncThunk(
  'task/fetchTasksWithPagination',
  async ({ page, pageSize }: FetchTasksWithPaginationProps, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const tasksCollection = collection(db, EndpontsFirebase.COLLECTION_TASKS)
      // Получение общего количества документов
      const snapshotCount = await getDocs(tasksCollection)
      const totalCount = snapshotCount.size

      let q
      let lastVisible: DocumentData | null = null
      if (page !== 1) {
        // получение первого документа предыдущей страницы
        const firstItemPreviousPageQuery = query(
          tasksCollection,
          limit((page - 1) * pageSize)
        )
        const firstItemPreviousPageSnapshot = await getDocs(
          firstItemPreviousPageQuery
        )
        lastVisible =
          firstItemPreviousPageSnapshot.docs[
            firstItemPreviousPageSnapshot.docs.length - 1
          ]
      }
      if (lastVisible) {
        // Создание запроса для пагинации c startAfter
        q = query(tasksCollection, startAfter(lastVisible), limit(pageSize))
      } else {
        // Создание запроса для пагинации без startAfter
        q = query(tasksCollection, limit(pageSize))
      }

      const querySnapshot = await getDocs(q)
      const tasks: ITask[] = querySnapshot.docs.map((doc) => {
        const data = doc.data()
        return { id: doc.id, ...data } as ITask
      })
      dispatch(
        allTasksActions.setTasks({
          allTasks: tasks,
        })
      )
      dispatch(allTasksActions.setTotalCount({ totalCount: totalCount }))
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
