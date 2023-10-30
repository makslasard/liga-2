import ServiceFetchTasks from './services/ServiceFetchTasks.js';
import TaskController from './controllers/TaskController.js';
const currentService = new ServiceFetchTasks('http://37.220.80.108/tasks');
const taskController = new TaskController(currentService);
taskController.getAllTasks();
taskController.getTaskById(46);
taskController.deleteTaskById(1);
const newTask = {
    id: 1,
    info: 'Это новая задача',
    isCompleted: true,
    isImportant: false,
    name: 'Новая задача',
};
taskController.addTask(newTask);
const updatedTask = {
    id: 22,
    info: 'Обновленная задача',
    isCompleted: true,
    isImportant: false,
    name: 'Это обновленная задача',
};
taskController.updateTaskById(22, updatedTask);
//# sourceMappingURL=index.js.map