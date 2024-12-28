// Удаление задачи по id
import axios from 'axios'
import { DeleteTaskByIdType } from '../../../../shared/api/types/types/commonTypes'
import { Constants } from '../../../../shared/api/constants/constant'
import { allTasksActions } from '../../task-list/model/allTasksSlice'
import { AppDispatch } from '@/app/store/store'

export const deleteTaskById =
  (taskId: number) => async (dispatch: AppDispatch) => {
      const url = Constants.BASE_URL + taskId

      dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
      try {
          await axios.delete<DeleteTaskByIdType>(url)
          dispatch(allTasksActions.deleteTask({ id: taskId }))
      } catch (e) {
          dispatch(
              allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` })
          )
      } finally {
          dispatch(allTasksActions.changeIsLoading({ isLoading: false }))
      }
  }
