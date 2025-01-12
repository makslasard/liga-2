// Фильтрация задача по текущему фильтру
import axios from 'axios'
import { AppDispatch } from '@/app/store/store'
import { Constants } from '@/shared/api/constants/constant'
import { FilterType } from '@/features/select-filter/model/types/types'
import { allTasksActions } from '@/widgets/task-list/model/allTasksSlice'

export const getTasksByFilters =
  (filter: FilterType) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const url = Constants.BASE_URL

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
      const response = await axios.get(url, {
        params: {
          filters: filter,
        },
      })
      dispatch(allTasksActions.setTasks({ allTasks: response.data }))
    } catch (e) {
      dispatch(
        allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` })
      )
      return null
    } finally {
      dispatch(allTasksActions.changeIsLoading({ isLoading: false }))
    }
  }
