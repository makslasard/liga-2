// Пагинация
import axios from 'axios'
import { Constants } from '@/shared/api/constants/constant'
import { AppDispatch } from '@/app/store/store'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'
import { ITask } from '@/shared/types/task/task'

export const getTaskPagination =
  ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) =>
  async (dispatch: AppDispatch) => {
    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const response = await axios.get<ITask[]>(Constants.BASE_URL, {
        params: {
          _limit: totalPages,
          _page: currentPage,
        },
      })
      dispatch(allTasksActions.setTasks({ allTasks: response.data }))
    } catch (e) {
      dispatch(
        allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` })
      )
    } finally {
      dispatch(allTasksActions.changeIsLoading({ isLoading: false }))
    }
  }
