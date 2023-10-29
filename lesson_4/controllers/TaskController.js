export default class TaskController {
    constructor(service) {
        this.service = service
    }

    getAllTasks = async () => {
        const response = await this.service.getAllTasks()
        return response
    }


    getTaskById = async (id) => {
        const response = await this.service.getTaskById(id)
        return response
    }

    deleteTaskById = async (id) => {
        const response = await this.service.deleteTaskById(id)
        return response
    }

    addTask = async (task) => {
        const response = await this.service.addTask(task)
        return response
    }

    updateTaskById = async (id, task) => {
        const response = await this.service.updateTaskById(id, task)
        return response
    }
}
