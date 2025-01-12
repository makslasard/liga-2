import { ITask } from '@/shared/types/task/task'

export interface IAllTaskState {
  allTasks: ITask[]
  isLoading: boolean
  errorMessage: string
}
