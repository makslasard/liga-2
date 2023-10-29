import { IService, ITask, TypeTaskForUpdate } from '../types/fetchTaskService.types';

export default class TaskController {
  service: IService;

  constructor(service: IService) {
    this.service = service;
  }

  getAllTasks = async (): Promise<ITask[] | null> => {
    const response = await this.service.getAllTasks();
    return response;
  };

  getTaskById = async (id: number): Promise<ITask | null> => {
    const response = await this.service.getTaskById(id);
    return response;
  };

  deleteTaskById = async (id: number) => {
    const response = await this.service.deleteTaskById(id);
    return response;
  };

  addTask = async (task: ITask): Promise<ITask | null> => {
    const response = await this.service.addTask(task);
    return response;
  };

  updateTaskById = async (id: number, task: TypeTaskForUpdate): Promise<TypeTaskForUpdate | null> => {
    const response = await this.service.updateTaskById(id, task);
    return response;
  };
}
