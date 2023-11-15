import axios, { AxiosResponse } from 'axios';
import { allTasksActions } from '../../store/reducers/allTasks/allTasksSlice';
import { ITask } from '../../types/Task/Task.types';
import { AppDispatch } from '../../store/store';
import {
  DeleteTaskByIdType,
  GetAllTaskType,
  GetTaskByIdType,
  PostNewTaskType,
  UpdateTaskByIdType,
} from '../../types/commonTypes';
import { Constants } from 'constants/constant';

const baseUrl = Constants.BASE_URL;

// Получение всех задач
export const getAllTasks = () => async (dispatch: AppDispatch) => {
  dispatch(allTasksActions.changeIsLoading({ isLoading: true }));
  try {
    const axiosResponse: AxiosResponse = await axios.get<GetAllTaskType[]>(baseUrl);
    dispatch(allTasksActions.setTasks({ allTasks: axiosResponse.data }));
  } catch (e) {
    dispatch(allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
  } finally {
    dispatch(allTasksActions.changeIsLoading({ isLoading: false }));
  }
};
// Получение задачи по id
export const getTaskById = (id: number | undefined) => async (dispatch: AppDispatch) => {
  dispatch(allTasksActions.changeIsLoading({ isLoading: true }));
  try {
    const axiosResponse: AxiosResponse = await axios.get<GetTaskByIdType>(baseUrl, {
      params: { id },
    });
    dispatch(allTasksActions.setTaskById({ taskById: axiosResponse.data }));
  } catch (e) {
    dispatch(allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
  } finally {
    dispatch(allTasksActions.changeIsLoading({ isLoading: false }));
  }
};
// Добавление новой задачи
export const setNewTask = (task: Omit<ITask, 'id'>) => async (dispatch: AppDispatch) => {
  dispatch(allTasksActions.changeIsLoading({ isLoading: true }));
  try {
    const axiosResponse: AxiosResponse = await axios.post<PostNewTaskType>(baseUrl, {
      ...task,
    });
    dispatch(allTasksActions.addTask({ newTask: task }));
  } catch (e) {
    dispatch(allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
    return null;
  } finally {
    dispatch(allTasksActions.changeIsLoading({ isLoading: false }));
  }
};
// Удаление задачи по id
export const deleteTaskById = (id: number | undefined) => async (dispatch: AppDispatch) => {
  dispatch(allTasksActions.changeIsLoading({ isLoading: true }));
  try {
    const axiosResponse: AxiosResponse = await axios.delete<DeleteTaskByIdType>(`${baseUrl}/${id}`);
    dispatch(allTasksActions.deleteTask({ id: id }));
  } catch (e) {
    dispatch(allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
  } finally {
    dispatch(allTasksActions.changeIsLoading({ isLoading: false }));
  }
};

// Обновление задачи по id
export const updateTaskById = (task: ITask, id: number) => async (dispatch: AppDispatch) => {
  try {
    const axiosResponse: AxiosResponse = await axios.patch<UpdateTaskByIdType>(`${baseUrl}/${id}`, {
      ...task,
    });
    dispatch(allTasksActions.updateTask({ updateTask: task }));
  } catch (e) {
    dispatch(allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
    return null;
  } finally {
    dispatch(allTasksActions.changeIsLoading({ isLoading: false }));
  }
};

// Фильтрация задача по текущему фильтру
export const getTasksByFilter = (isImportant: boolean, isCompleted: boolean) => async (dispatch: AppDispatch) => {
  dispatch(allTasksActions.changeIsLoading({ isLoading: true }));
  try {
    const axiosResponse: AxiosResponse = await axios.get<GetAllTaskType[]>(baseUrl, {
      params: {
        isImportant,
        isCompleted,
      },
    });
    dispatch(allTasksActions.setTasks({ allTasks: axiosResponse.data }));
  } catch (e) {
    dispatch(allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
    return null;
  } finally {
    dispatch(allTasksActions.changeIsLoading({ isLoading: false }));
  }
};

// Поиск задач по текущему поисковому запросу
export const getTaskBySearchQuery = (name_like: string) => async (dispatch: AppDispatch) => {
  dispatch(allTasksActions.changeIsLoading({ isLoading: true }));
  try {
    const axiosResponse: AxiosResponse = await axios.get<ITask[]>(baseUrl, {
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
// Пагинация
export const getTaskPagination = (currentPage: number, totalPages: number) => async (dispatch: AppDispatch) => {
  dispatch(allTasksActions.changeIsLoading({ isLoading: true }));
  try {
    const axiosResponse: AxiosResponse<ITask[]> = await axios.get<ITask[]>(baseUrl, {
      params: {
        _limit: totalPages,
        _page: currentPage,
      },
    });
    dispatch(allTasksActions.setTasks({ allTasks: axiosResponse.data }));
  } catch (e) {
    dispatch(allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` }));
  } finally {
    dispatch(allTasksActions.changeIsLoading({ isLoading: false }));
  }
};
