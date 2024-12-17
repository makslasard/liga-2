import { IEditTask } from '../types/types';

export interface IEditTaskState {
  currentTaskById: IEditTask | null;
  isLoading: boolean;
  errorMessage: string | null;
}
