import { ITask } from '../../../types/Task/Task.types';

export interface IAllTaskState {
  currentTaskById: ITask;
  allTasks: ITask[];
  filteredTasks: ITask[];
}
