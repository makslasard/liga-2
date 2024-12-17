// Поиск задач по текущему поисковому запросу
import axios from 'axios';
import { Constants } from '../../../../shared/api/constants/constant';
import { IEditTask } from '../../../task/edit-task/types/types';
import { allTasksActions } from '../../../task/task-list/model/allTasksSlice';
import { AppDispatch } from 'app/store/store';

export const getTaskBySearchQuery = (name_like: string) => async (dispatch: AppDispatch) => {
  dispatch(allTasksActions.changeIsLoading({ isLoading: true }));
  try {
    const axiosResponse = await axios.get<IEditTask[]>(Constants.BASE_URL, {
      params: {
        name_like,
      },
    });
    dispatch(allTasksActions.setTasks({ allTasks: axiosResponse.data }));
  } catch (e) {
    dispatch(allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
  } finally {
    dispatch(allTasksActions.changeIsLoading({ isLoading: false }));
  }
};
