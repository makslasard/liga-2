// Добавление новой задачи
import axios from 'axios'
import { AppDispatch } from '@/app/store/store'
import { Constants } from '@/shared/api/constants/constant'
import { ITask } from '@/shared/types/task/task'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'

export const setNewTask =
  (newTask: ITask) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const url = Constants.BASE_URL

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const response = await axios.post(url, newTask)
      dispatch(allTasksActions.addTask({ newTask: response.data }))
    } catch (e) {
      dispatch(
        allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` })
      )
    } finally {
      dispatch(allTasksActions.changeIsLoading({ isLoading: false }))
    }
  }
