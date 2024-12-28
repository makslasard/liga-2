// Фильтрация задача по текущему фильтру
import axios from 'axios'
import { FilterType } from '../types/types'
import { Constants } from '../../../../shared/api/constants/constant'
import { allTasksActions } from '../../../task/task-list/model/allTasksSlice'
import { AppDispatch } from '@/app/store/store'

export const getTasksByFilters =
  (filter: FilterType) =>
  // eslint-disable-next-line no-undef,consistent-return
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
