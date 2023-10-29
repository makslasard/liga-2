import ServiceFetchTasks from "./services/ServiceFetchTasks.js";
import TaskController from "./controllers/TaskController.js";
// import ServiceXMLTasks from "./ServiceXMLTasks.js";

const currentService = new ServiceFetchTasks('http://37.220.80.108/tasks')
const taskController = new TaskController(currentService)

// Получение всех задач
const allTasks = await taskController.getAllTasks()

// Отображение всех задач в консоли
console.log('All tasks:', allTasks)

// Получение задачи по идентификатору
const taskById = await taskController.getTaskById(7)

// Отображение задачи в консоли
console.log('Task by ID:', taskById)

// Удаление задачи по идентификатору
const deleteTaskById = await taskController.deleteTaskById(2)
console.log('Delete task by ID:', deleteTaskById)

// Добавление новой задачи
const newTask = {
    id: 10,
    info: 'Это новая задача',
    isCompleted: true,
    isImportant: false,
    name: 'Новая задача',
}
// В случае если такая задача есть - 500 (Internal Server Error)
const addNewTask = await taskController.addTask(newTask)
console.log('Add new task:', addNewTask)

// Обновление задачи
const updatedTask = {
    id: 11,
    info: 'Обновленная задача',
    isCompleted: true,
    isImportant: false,
    name: 'Это обновленная задача',
}
const updateTaskById = await taskController.updateTaskById(11, updatedTask)
console.log('Update task by ID:', updateTaskById)














// const task = await ServiceFetchTasks.getTaskById(3)

// const getAllTasks = async () => {
//     try {
//         const response = await fetch('http://37.220.80.108/tasks')
//             .then(response => response.json())
//             .then(data => console.log(data))
//         return response
//     } catch (error) {
//         console.error(error)
//     }
// }
// getAllTasks()


