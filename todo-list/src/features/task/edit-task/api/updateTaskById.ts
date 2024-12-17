// Обновление задачи по id
import axios from 'axios';
import { Constants } from '../../../../shared/api/constants/constant';
import { IEditTask } from '../types/types';
import { editTaskActions } from '../model/edit-task.slice';
import { AppDispatch } from 'app/store/store';

export const updateTaskById = (task: IEditTask, taskId: number) => async (dispatch: AppDispatch) => {
  const url = Constants.BASE_URL + taskId;

  try {
    const response = await axios.patch<IEditTask>(url, task);
    dispatch(editTaskActions.setCurrentTaskById(response.data));
  } catch (e) {
    dispatch(editTaskActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
    return null;
  } finally {
    dispatch(editTaskActions.changeIsLoading({ isLoading: false }));
  }
};
