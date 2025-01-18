// Добавление новой задачи
import { EndpontsFirebase } from '@/shared/api/constants/constant'
import { ITask } from '@/shared/types/task/task'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'

export const fetchAddNewTask = createAsyncThunk(
  'task/addNewTask',
  async (newTask: ITask, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      // Создание задачи без id
      const querySnapshot = await addDoc(
        collection(db, EndpontsFirebase.COLLECTION_TASKS),
        newTask
      )
      const firebaseDocumentID = querySnapshot.id
      const updatedTaskByFirebaseID = { id: firebaseDocumentID, ...newTask }

      // Обновление задачи c добавлением id документа
      await updateDoc(
        doc(db, EndpontsFirebase.COLLECTION_TASKS, firebaseDocumentID),
        updatedTaskByFirebaseID
      )

      dispatch(allTasksActions.addTask({ newTask: updatedTaskByFirebaseID }))
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
