// Получение всех задач
import axios from 'axios';
import { Constants } from '../../../../shared/api/constants/constant';
import { IEditTask } from '../../edit-task/types/types';
import { allTasksActions } from '../model/allTasksSlice';
import { AppDispatch } from 'app/store/store';

const baseUrl = Constants.BASE_URL;

export const getAllTasks = () => async (dispatch: AppDispatch) => {
  dispatch(allTasksActions.changeIsLoading({ isLoading: true }));
  try {
    const axiosResponse = await axios.get<IEditTask[]>(baseUrl);
    dispatch(allTasksActions.setTasks({ allTasks: axiosResponse.data }));
  } catch (e) {
    dispatch(allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
  } finally {
    dispatch(allTasksActions.changeIsLoading({ isLoading: false }));
  }
};
