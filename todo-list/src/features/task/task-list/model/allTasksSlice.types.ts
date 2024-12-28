import { IEditTask } from '../../edit-task/types/types';

export interface IAllTaskState {
  allTasks: IEditTask[];
  isLoading: boolean;
  errorMessage: string;
}
