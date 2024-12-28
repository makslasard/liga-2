export interface IEditTask {
  taskId: number;
  nameTask: string;
  infoTask: string;
  editStatus?: boolean;
  importantStatus?: boolean;
  completedStatus?: boolean;
}

export interface IEditTaskProps {
  optionEditedTask: IEditTask;
}
