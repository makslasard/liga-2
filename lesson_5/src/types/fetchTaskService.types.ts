// Типизация получаемой задачи
export interface ITask {
  id: number;
  info: string;
  isCompleted: boolean;
  isImportant: boolean;
  name: string;
}

// Все данные для обновления не обязательны
export type TypeTaskForUpdate = Partial<ITask>;

// Типизация входящего интерфейса
export interface IService {
  getAllTasks: () => Promise<ITask[] | null>;
  getTaskById: (id: number) => Promise<ITask | null>;
  deleteTaskById: (id: number) => Promise<Response | null>;
  addTask: (task: ITask) => Promise<ITask | null>;
  updateTaskById: (id: number, task: TypeTaskForUpdate) => Promise<TypeTaskForUpdate | null>;
}
