import { ITask } from '../../../types/Task/Task.types';

export interface IAllTaskState {
  currentTaskById: ITask[] | null;
  allTasks: ITask[];
  isLoading: boolean;
  errorMessage: string;
}
