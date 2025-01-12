// Обновление задачи по id
import axios from 'axios'
import { editTaskActions } from '../model/edit-task.slice'
import { AppDispatch } from '@/app/store/store'
import { Constants } from '@/shared/api/constants/constant'
import { ITask } from '@/shared/types/task/task'

export const updateTaskById =
  (task: ITask, taskId: number) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const url = Constants.BASE_URL + taskId

    try {
      const response = await axios.patch<ITask>(url, task)
      dispatch(editTaskActions.setCurrentTaskById(response.data))
    } catch (e) {
      dispatch(
        editTaskActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` })
      )
      return null
    } finally {
      dispatch(editTaskActions.changeIsLoading({ isLoading: false }))
    }
  }
