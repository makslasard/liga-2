// Добавление новой задачи
import api from '../../../../shared/api/api';
import { apiEndpoints } from '../../../../shared/api/links/apiLinks';
import { IEditTask } from '../../edit-task/types/types';
import { allTasksActions } from '../../task-list/model/allTasksSlice';
import { AppDispatch } from 'app/store/store';

export const setNewTask = (newTask: IEditTask) => async (dispatch: AppDispatch) => {
  dispatch(allTasksActions.changeIsLoading({ isLoading: true }));
  try {
    const response = api.post(apiEndpoints.tasks.post.addNewTask, newTask);
    dispatch(allTasksActions.addTask({ newTask: newTask }));
  } catch (e) {
    dispatch(allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
    return null;
  } finally {
    dispatch(allTasksActions.changeIsLoading({ isLoading: false }));
  }
};
