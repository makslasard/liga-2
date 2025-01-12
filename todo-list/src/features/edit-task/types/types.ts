import { ITask } from '@/shared/types/task/task'

export interface IEditTaskProps {
  optionEditedTask: ITask
}

export type ValidateFormNewTask = {
  nameTask: string
  infoTask: string
}
