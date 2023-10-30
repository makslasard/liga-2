var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class ServiceFetchTasks {
    constructor(_baseUrl) {
        this._baseUrl = _baseUrl;
        this.getAllTasks = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(this._baseUrl)
                    .then((response) => response.json())
                    .then((tasks) => {
                    console.log('All tasks:', tasks);
                    return tasks;
                });
                return response;
            }
            catch (error) {
                console.log(`Не удалось получить все задачи - произошла ошибка: ${error}`);
                return null;
            }
        });
        this.getTaskById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this._baseUrl}/${id}`)
                    .then((response) => response.json())
                    .then((task) => {
                    console.log('Task by ID:', task);
                    return task;
                });
                return response;
            }
            catch (error) {
                console.log(`Не удалось получить задачу по id - произошла ошибка: ${error}`);
                return null;
            }
        });
        this.deleteTaskById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this._baseUrl}/${id}`, {
                    method: 'DELETE',
                });
                console.log('Delete task by ID:', response);
                return response;
            }
            catch (error) {
                console.log(`Не удалось удалить задачу по id - произошла ошибка ${error}`);
                return null;
            }
        });
        this.addTask = (task) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(this._baseUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(task),
                });
                console.log('Add new task:', response);
                return response.json();
            }
            catch (error) {
                console.log(`Не удалось добавить задачу - произошла ошибка ${error}`);
                return null;
            }
        });
        this.updateTaskById = (id, task) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this._baseUrl}/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(task),
                });
                console.log('Update task by ID:', response);
                return response.json();
            }
            catch (error) {
                console.log(`Не удалось обновить задачу - произошла ошибка ${error}`);
                return null;
            }
        });
        this._baseUrl = _baseUrl;
    }
}
//# sourceMappingURL=ServiceFetchTasks.js.map