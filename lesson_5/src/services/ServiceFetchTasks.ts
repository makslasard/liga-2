import { ITask, TypeTaskForUpdate } from 'src/types/fetchTaskService.types';

export default class ServiceFetchTasks {
  constructor(private readonly _baseUrl: string) {
    this._baseUrl = _baseUrl;
  }

  // GET - Работает
  getAllTasks = async (): Promise<ITask[] | null> => {
    try {
      const response = await fetch(this._baseUrl).then((response) => response.json());
      return response;
    } catch (error) {
      console.log(`Не удалось получить все задачи - произошла ошибка: ${error}`);

      return null;
    }
  };

  // GET/id - Работает
  getTaskById = async (id: number): Promise<ITask | null> => {
    try {
      const response = await fetch(`${this._baseUrl}/${id}`).then((response) => response.json());
      return response;
    } catch (error) {
      console.log(`Не удалось получить задачу по id - произошла ошибка: ${error}`);

      return null;
    }
  };

  // DELETE - Работает
  deleteTaskById = async (id: number): Promise<Response | null> => {
    try {
      const response = await fetch(`${this._baseUrl}/${id}`, {
        method: 'DELETE',
      });
      return response;
    } catch (error) {
      console.log(`Не удалось удалить задачу по id - произошла ошибка ${error}`);

      return null;
    }
  };

  // POST - Работает
  addTask = async (task: ITask): Promise<ITask | null> => {
    try {
      const response = await fetch(this._baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      return response.json();
    } catch (error) {
      console.log(`Не удалось добавить задачу - произошла ошибка ${error}`);

      return null;
    }
  };

  // PATCH - Работает
  updateTaskById = async (id: number, task: TypeTaskForUpdate): Promise<TypeTaskForUpdate | null> => {
    try {
      const response = await fetch(`${this._baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      return response.json();
    } catch (error) {
      console.log(`Не удалось обновить задачу - произошла ошибка ${error}`);

      return null;
    }
  };
}
