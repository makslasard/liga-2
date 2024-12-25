export interface ITask {
  id: number;
  name: string;
  info: string;
  isCompleted: boolean;
  isImportant: boolean;
}

export const defaultValueTaskForm = {
  taskId: 1,
  nameTask: '',
  infoTask: '',
  editStatus: false,
  completedStatus: false,
  importantStatus: false,
};
