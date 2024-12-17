export type ChangedTaskForm = {
  id: number;
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
};

export enum TaskFieldNames {
  Name = 'name',
  Info = 'info',
  IsImportant = 'isImportant',
  IsCompleted = 'isCompleted',
}
