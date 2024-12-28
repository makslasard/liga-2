// Добавление новой задачи
import axios from 'axios'
import { apiEndpoints } from '@/shared/api/links/apiLinks'
import { IEditTask } from '../../../edit-task/types/types'
import { allTasksActions } from '../../../task-list/model/allTasksSlice'
import { AppDispatch } from '@/app/store/store'

export const setNewTask =
  (newTask: IEditTask) =>
      async (dispatch: AppDispatch): Promise<void> => {
          dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
          try {
              const response = await axios.post(
                  apiEndpoints.tasks.post.addNewTask,
                  newTask
              )
              dispatch(allTasksActions.addTask({ newTask: response.data }))
          } catch (e) {
              dispatch(
                  allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` })
              )
          } finally {
              dispatch(allTasksActions.changeIsLoading({ isLoading: false }))
          }
      }
