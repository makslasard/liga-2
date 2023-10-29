export default class ServiceFetchTasks {
    constructor(_baseUrl) {
        this._baseUrl = _baseUrl;
    }

    // GET
    getAllTasks = async () => {
        try {
            const response = await fetch(`${this._baseUrl}`).then(response => response.json());
            return response;
        } catch (error) {
            console.log(`Не удалось получить все задачи - произошла ошибка: ${error}`)

            return null
        }
    }

    // GET/id
     getTaskById = async (id) => {
        try {
            const response = await fetch(`${this._baseUrl}/${id}`)
                .then(response => response.json());

            return response;
        } catch (error) {
            console.log(`Не удалось получить задачу по id - произошла ошибка: ${error}`)

            return null
        }

    }

    // DELETE
    deleteTaskById = async (id) => {
        try {
            const response = await fetch(`${this._baseUrl}/${id}`, {
                method: 'DELETE',
            });
            return response;
        } catch (error) {
            console.log(`Не удалось удалить задачу по id - произошла ошибка ${error}`)

            return null
        }

    }

    // POST
    addTask = async (task) => {
        try {
            const response = await fetch(`${this._baseUrl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });
            return response;
        } catch (error) {
            console.log(`Не удалось добавить задачу - произошла ошибка ${error}`)

            return null
        }

    }

    // PATCH
     updateTaskById = async (id, task) => {
        try {
            const response = await fetch(`${this._baseUrl}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });
            return response;
        } catch (error) {
            console.log(`Не удалось обновить задачу - произошла ошибка ${error}`)

            return null
        }

    }
}