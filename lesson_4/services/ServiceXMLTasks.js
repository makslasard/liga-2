export default class ServiceXMLTasks {
    constructor(_baseUrl) {
        this._baseUrl = _baseUrl;
    }
    // GET
    getAllTasks = async () => {
        const xhr = new XMLHttpRequest()

        xhr.open('GET', this._baseUrl, true)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function () {
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
    getTaskById = async (id) => {
        const xhr = new XMLHttpRequest()

        xhr.open('GET', `${this._baseUrl}/${id}`, true)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function () {
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
    deleteTaskById = async (id) => {
        const xhr = new XMLHttpRequest()

        xhr.open('DELETE', `${this._baseUrl}/${id}`, true)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function () {
            if (xhr.status === 204) {
                return true
            } else {
                console.error(`Failed to delete task by ID: ${xhr.status} ${xhr.statusText}`)
            }
        }

        xhr.send()
    }

    // POST
    addTask = async (task) => {
        const xhr = new XMLHttpRequest()

        xhr.open('POST', this._baseUrl, true)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function () {
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
    updateTaskById = async (id, task) => {
        const xhr = new XMLHttpRequest()

        xhr.open('PATCH', `${this._baseUrl}/${id}`)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function () {
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