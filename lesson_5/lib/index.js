import ServiceFetchTasks from './services/ServiceFetchTasks.js';
import TaskController from './controllers/TaskController.js';
const currentService = new ServiceFetchTasks('http://37.220.80.108/tasks');
const taskController = new TaskController(currentService);
const allTasks = taskController.getAllTasks();
console.log('All tasks:', allTasks);
const taskById = taskController.getTaskById(2);
console.log('Task by ID:', taskById);
const deleteTaskById = taskController.deleteTaskById(1);
console.log('Delete task by ID:', deleteTaskById);
const newTask = {
    id: 1,
    info: 'Это новая задача',
    isCompleted: true,
    isImportant: false,
    name: 'Новая задача',
};
const addNewTask = taskController.addTask(newTask);
console.log('Add new task:', addNewTask);
const updatedTask = {
    id: 1,
    info: 'Обновленная задача',
    isCompleted: true,
    isImportant: false,
    name: 'Это обновленная задача',
};
const updateTaskById = taskController.updateTaskById(3, updatedTask);
console.log('Update task by ID:', updateTaskById);
//# sourceMappingURL=index.js.map