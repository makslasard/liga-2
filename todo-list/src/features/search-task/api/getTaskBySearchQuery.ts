// Поиск задач по текущему поисковому запросу
import axios from 'axios'
import { Constants } from '@/shared/api/constants/constant'
import { AppDispatch } from '@/app/store/store'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'
import { ITask } from '@/shared/types/task/task'

export const getTaskBySearchQuery =
  (searchQuery: string) => async (dispatch: AppDispatch) => {
    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const axiosResponse = await axios.get<ITask[]>(Constants.BASE_URL, {
        params: {
          name_like: searchQuery,
        },
      })
      dispatch(allTasksActions.setTasks({ allTasks: axiosResponse.data }))
    } catch (e) {
      dispatch(
        allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` })
      )
    } finally {
      dispatch(allTasksActions.changeIsLoading({ isLoading: false }))
    }
  }
