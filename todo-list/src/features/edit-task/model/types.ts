import { ITask } from '@/shared/types/task/task'

export interface IEditTaskState {
  currentTaskById: ITask | null
  isLoading: boolean
  errorMessage: string | null
}
