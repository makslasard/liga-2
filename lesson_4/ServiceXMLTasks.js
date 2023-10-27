export default class ServiceXMLTasks {
    // GET
    static async getAllTasks() {
        const xhr = new XMLHttpRequest()

        xhr.open('GET', 'http://37.220.80.108/tasks')
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText)
                return response
            } else {
                console.error(`Failed to get all tasks: ${xhr.status} ${xhr.statusText}`)
            }
        }

        xhr.send()
    }

    // GET/id
    static async getTaskById(id) {
        const xhr = new XMLHttpRequest()

        xhr.open('GET', `http://37.220.80.108/tasks/${id}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText)
                return response
            } else {
                console.error(`Failed to get task by ID: ${xhr.status} ${xhr.statusText}`)
            }
        }

        xhr.send()
    }

    // DELETE
    static async deleteTaskById(id) {
        const xhr = new XMLHttpRequest()

        xhr.open('DELETE', `http://37.220.80.108/tasks/${id}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function() {
            if (xhr.status === 204) {
                return true
            } else {
                console.error(`Failed to delete task by ID: ${xhr.status} ${xhr.statusText}`)
            }
        }

        xhr.send()
    }

    // POST
    static async addTask(task) {
        const xhr = new XMLHttpRequest()

        xhr.open('POST', 'http://37.220.80.108/tasks')
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function() {
            if (xhr.status === 201) {
                const response = JSON.parse(xhr.responseText)
                return response
            } else {
                console.error(`Failed to add task: ${xhr.status} ${xhr.statusText}`)
            }
        }

        xhr.send(JSON.stringify(task))
    }

    // PATCH
    static async updateTaskById(id, task) {
        const xhr = new XMLHttpRequest()

        xhr.open('PATCH', `http://37.220.80.108/tasks/${id}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText)
                return response
            } else {
                console.error(`Failed to update task by ID: ${xhr.status} ${xhr.statusText}`)
            }
        }

        xhr.send(JSON.stringify(task))
    }
}