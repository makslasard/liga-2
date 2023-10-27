export default class ServiceFetchTasks {
    // GET - Работает
    static async getAllTasks() {
        try {
            const response = await fetch('http://37.220.80.108/tasks')
                .then(response => response.json())
            return response
        } catch (error) {
            console.error(error)
        }
    }

    // GET/id - Работает
    static async getTaskById(id) {
        const response = await fetch(`http://37.220.80.108/tasks/${id}`)
            .then(response => response.json())

        return response
    }

    // DELETE - Работает
    static async deleteTaskById(id) {
        const response = await fetch(`http://37.220.80.108/tasks/${id}`, {
            method: 'DELETE',
        })
        return response
    }

    // POST - Работает
    static async addTask(task) {
        const response = await fetch('http://37.220.80.108/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        return response
    }

    // PATCH - Работает
    static async updateTaskById(id, task) {
        const response = await fetch(`http://37.220.80.108/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        return response
    }
}