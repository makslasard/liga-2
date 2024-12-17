// Пагинация
import axios from 'axios';
import { Constants } from '../../../shared/api/constants/constant';
import { IEditTask } from '../../task/edit-task/types/types';
import { allTasksActions } from '../../task/task-list/model/allTasksSlice';
import { AppDispatch } from 'app/store/store';

export const getTaskPagination =
  ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) =>
  async (dispatch: AppDispatch) => {
    dispatch(allTasksActions.changeIsLoading({ isLoading: true }));
    try {
      const response = await axios.get<IEditTask[]>(Constants.BASE_URL, {
        params: {
          _limit: totalPages,
          _page: currentPage,
        },
      });
      dispatch(allTasksActions.setTasks({ allTasks: response.data }));
    } catch (e) {
      dispatch(allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
    } finally {
      dispatch(allTasksActions.changeIsLoading({ isLoading: false }));
    }
  };
