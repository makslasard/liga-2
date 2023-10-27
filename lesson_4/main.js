import ServiceFetchTasks from "./ServiceFetchTasks.js";
import TaskController from "./TaskController.js";
import ServiceXMLTasks from "./ServiceXMLTasks.js";

const taskController = new TaskController(ServiceFetchTasks)

// Получение всех задач
const allTasks = await taskController.getAllTasks('http://37.220.80.108/tasks')

// Отображение всех задач в консоли
console.log('All tasks:', allTasks)

// Получение задачи по идентификатору
const taskById = await taskController.getTaskById(3)

// Отображение задачи в консоли
console.log('Task by ID:', taskById)

// Удаление задачи по идентификатору
const deleteTaskById = await taskController.deleteTaskById(1)
console.log('Delete task by ID:', deleteTaskById)

// Добавление новой задачи
const newTask = {
    id: 1,
    info: 'Это новая задача',
    isCompleted: true,
    isImportant: false,
    name: 'Новая задача',
}
const addNewTask = await taskController.addTask(newTask)
console.log('Add new task:', addNewTask)

// Обновление задачи
const updatedTask = {
    id: 1,
    info: 'Обновленная задача',
    isCompleted: true,
    isImportant: false,
    name: 'Это обновленная задача',
}
const updateTaskById = await taskController.updateTaskById(3, updatedTask)
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
